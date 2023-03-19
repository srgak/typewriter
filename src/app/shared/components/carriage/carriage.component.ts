import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, filter, Subscription } from 'rxjs';
import { ExtraAudio } from 'src/app/shared/scripts/extraAudio';
import { intervalTimer$ } from 'src/app/shared/scripts/intervalTimer';
import { DataService } from 'src/app/shared/services/data.service';
import { PaperService } from 'src/app/shared/services/paper.service';
import { moveCarriage, moveTrigger } from './carriage.animation';

@Component({
  selector: 'typewriter-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    moveCarriage,
    moveTrigger
  ]
})
export class CarriageComponent implements OnInit, OnDestroy {
  @HostBinding('style.transform') private transform!: string;

  private readonly offsetXStart: number = 120; //координата каретки по X начальная
  private offsetXCurrent: number = this.offsetXStart; //координата каретки по X текущая
  private borderIn!: number; //внутренняя граница бумаги
  private borderOut!: number; //внешняя граница бумаги
  public readonly symbol: BehaviorSubject<string> = new BehaviorSubject<string>(''); //текущий символ
  public readonly nextLine: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); //следующая линия
  private readonly carriageEl: Element = this.elRef.nativeElement; //элемент каретки
  private carriageWidth!: number; //ширина каретки
  private readonly subs: Subscription = new Subscription();
  private carriageState: string = 'from';
  public carriageTriggerState: string = 'from';
  private readonly audioReturnCarriage: ExtraAudio = new ExtraAudio('assets/audio/return-carriage.mp3', {
    speed: 1.7
  }); //звук перемотки каретки
  private readonly audioEndCarriage: ExtraAudio = new ExtraAudio('assets/audio/end-carriage.mp3'); //звук конца строки

  @HostBinding('@moveCarriage') get moveCarriageData(): any {
    return {
      value: this.carriageState,
      params: {
        offsetCurrent: this.offsetXCurrent,
        offsetStart: this.offsetXStart,
        duration: ((this.offsetXCurrent - this.offsetXStart)) / 20 * 0.200
      }
    }
  };
  @HostListener('@moveCarriage.done') private moveCarriageDone(): void {
    this.offsetXCurrent = this.offsetXStart;
    this.carriageState = 'from';
  }

  constructor(
    public readonly data: DataService,
    private readonly elRef: ElementRef,
    public readonly paperData: PaperService
  ) {}

  get transformValue(): string {
    return `translateX(calc(50% - ${this.offsetXCurrent}px))`;
  }

  //передвинуть дальше
  private moveNext = (): void => {
    if(this.offsetXCurrent === this.borderIn) this.onLimitPaper();
    this.data.isDisable = this.offsetXCurrent >= this.borderOut;
    this.offsetXCurrent += 10;
    this.transform = this.transformValue;
    this.paperData.nextSymbol.next(this.data.targetKey?.symbol?.[this.data.register.value] || '');
  };

  //передвинуть назад
  private moveBack = (): void => {
    this.offsetXCurrent -= 10;
    this.transform = this.transformValue;
  };

  //сброс каретки
  private resetCarriage = (): void => {
    this.carriageState = 'to';
  }

  //достигнут предел каретки
  private onLimitPaper(): void {
    this.audioEndCarriage.play();
  };
  
  //переход на следующую строку
  public goToNextString(): void {
    this.resetCarriage();
    this.carriageTriggerState = 'to';
    this.paperData.nextLine.next(true);
    if(this.offsetXStart !== this.offsetXCurrent) {
      intervalTimer$((this.offsetXCurrent - this.offsetXStart) / 20, 200)
        .subscribe(() => {
          this.audioReturnCarriage.play();
        });
    }
  }

  //анимация ручага завершена
  public moveTriggerDone(): void {
    this.carriageTriggerState = 'from';
  }

  ngOnInit(): void {
    this.carriageWidth = this.carriageEl.clientWidth;
    this.borderOut = this.carriageWidth - 160;
    this.borderIn = this.carriageWidth - 200;
    this.transform = this.transformValue;
    this.subs.add(
      this.data.isTypeLetter
      .pipe(
        filter(value => !!value)
      )
      .subscribe(this.moveNext)
    );
    this.subs.add(
      this.paperData.isBack
        .pipe(
          filter(value => !!value),
          filter(() => this.offsetXCurrent >= this.offsetXStart + 10)
        )
        .subscribe(this.moveBack)
    );
    this.subs.add(
      this.paperData.isClear
        .subscribe(this.resetCarriage)
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
