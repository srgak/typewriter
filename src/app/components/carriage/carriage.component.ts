import { Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, pairwise, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'typewriter-carriage',
  templateUrl: './carriage.component.html',
  styleUrls: ['./carriage.component.less']
})
export class CarriageComponent implements OnInit, OnDestroy {
  @ViewChild('trigger') public trigger!: ElementRef;
  @HostBinding('style.transform') private transform!: string;

  private offsetXStart: number = 42;
  private offsetXCurrent: number = this.offsetXStart;
  private borderIn!: number;
  private borderOut!: number;
  public symbol: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public nextLine: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLimitPaper: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLimitCarriage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private carriageEl: Element = this.elRef.nativeElement;
  private carriageWidth: number = this.carriageEl.clientWidth;
  private subs: Subscription = new Subscription();

  constructor(
    public data: DataService,
    private elRef: ElementRef,
    private paperData: PaperService
  ) { }

  get transformValue(): string {
    return `translateX(calc(50% - ${this.offsetXCurrent}px))`;
  }

  private resetCarriage(): void {
    this.offsetXCurrent = this.offsetXStart;
    this.transform = this.transformValue;
  }
  
  public goToNextString(): void {
    this.resetCarriage();
    this.trigger.nativeElement.blur();
    this.paperData.nextLine.next(true);
  }

  ngOnInit(): void {
    this.borderOut = this.carriageWidth - 240;
    this.borderIn = this.carriageWidth - 270;
    this.transform = this.transformValue;
    this.subs.add(
      this.data.isTypeLetter
      .pipe(
        filter(val => !!val)
      )
      .subscribe(() => {
        this.isLimitPaper.next(this.offsetXCurrent >= this.borderIn);
        this.isLimitCarriage.next(this.offsetXCurrent >= this.borderOut);
        this.offsetXCurrent += 10;
        this.transform = this.transformValue;
        this.paperData.nextSymbol.next(this.data.targetKey?.symbol?.[this.data.register.value] || '');
      })
    );
    this.subs.add(
      this.paperData.isBack
        .pipe(
          filter(val => !!val),
          filter(() => this.offsetXCurrent >= this.offsetXStart + 10)
        )
        .subscribe(() => {
          this.offsetXCurrent -= 10;
          this.transform = this.transformValue;
        })
    );
    this.subs.add(
      this.isLimitPaper
      .pipe(
        pairwise(),
        filter(val => val[0] !== val[1])
      )
      .subscribe(() => {
        const audio = new Audio('assets/audio/end-carriage.mp3');
        audio.play();
      })
    );
    this.subs.add(
      this.isLimitCarriage
      .pipe(
        filter(val => !!val)
      )
      .subscribe(() => {
        this.data.isDisable = true;
      })
    );
    this.subs.add(
      this.paperData.isClear
        .subscribe(this.resetCarriage.bind(this))
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
