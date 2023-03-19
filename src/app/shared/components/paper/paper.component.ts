import { Component, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { PaperInfo, PrintedLetter } from 'src/app/shared/models/interfaces';
import { PAPER_INFO } from 'src/app/shared/models/paper-token';
import { ExtraAudio } from 'src/app/shared/scripts/extraAudio';
import { intervalTimer$ } from 'src/app/shared/scripts/intervalTimer';
import { PaperService } from 'src/app/shared/services/paper.service';
import { movePaper } from './paper.animation';

@Component({
  selector: 'typewriter-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.less'],
  animations: [
    movePaper
  ]
})
export class PaperComponent implements OnInit, OnDestroy {
  @ViewChild('paper', {static: true}) public paperRef!: ElementRef;
  @Output() public readonly onGetSymbol: EventEmitter<PrintedLetter> = new EventEmitter();

  private readonly offsetXStart: number = 38; //координата буквы по X начальная
  private offsetXCurrent: number = this.offsetXStart; //координата буквы по X текущая
  private readonly offsetYStart: number = 60; //координата буквы по Y начальная
  private offsetYCurrent: number = this.offsetYStart; //координата буквы по Y текущая
  public translateY: number = 0; //положение бумаги по Y
  private paperEl!: HTMLCanvasElement; //элемент бумаги
  private ctx!: CanvasRenderingContext2D | null; //контекст для отрисовки
  private readonly subs: Subscription = new Subscription();
  public paperState: string = 'down';
  private readonly audioScrollPaper: ExtraAudio = new ExtraAudio('assets/audio/scroll-paper.mp3'); //звук прокрутки бумаги

  constructor(
    @Inject(PAPER_INFO) private readonly info: PaperInfo,
    private readonly renderer2: Renderer2,
    private readonly paperData: PaperService
  ) { }

  get transformValue(): string {
    return `translateY(${this.translateY}px)`;
  }

  public movePaperDone(): void {
    this.paperState = 'down';
  }

  //напечатать символ
  private printNextSymbol = (letter: string): void => {
    const letterData: PrintedLetter = {
      name: letter,
      x: this.offsetXCurrent,
      y: this.offsetYCurrent
    };

    this.offsetXCurrent += 10;
    this.ctx?.fillText(letterData.name, letterData.x, letterData.y);
    this.onGetSymbol.emit(letterData);
  };

  //перейти на следующую строку
  private goToNextLine = (): void => {
    this.offsetXCurrent = this.offsetXStart;
    this.offsetYCurrent += 20;
    this.translateY -= 20;
    this.paperState = 'up';
  };

  //переместиться назад
  private goBack = (): void => {
    this.offsetXCurrent -= 10;
  };

  //отчистить бумагу
  private clear = (): void => {
    this.ctx!.clearRect(0, 0, this.info.width, this.info.height);
    this.ctx!.fillStyle = this.info.color;
    this.ctx?.fillRect(0, 0, this.info.width, this.info.height);
    this.ctx!.fillStyle = 'black';
    this.offsetXCurrent = this.offsetXStart;
    this.offsetYCurrent = this.offsetYStart;
    this.translateY = 0;
    this.renderer2.setStyle(this.paperEl, 'transform', this.transformValue);
  };

  //перемещение по бумаге
  private movePaper = (value: number): void => {
    intervalTimer$(Math.abs(value), 200)
      .pipe(
        map(() => value < 0 ? -1 : 1)
      )
      .subscribe(value => {
        this.translateY -= 20 * value;
        this.offsetYCurrent += 20 * value;
        
        this.renderer2.setStyle(this.paperEl, 'transform', this.transformValue);
        this.audioScrollPaper.play();
      });
  };

  //инициализация
  public initPaper(data: any): void {
    this.paperEl = data.el;
    this.ctx = data.ctx;
  }

  ngOnInit(): void {
    this.subs.add(
      this.paperData.nextSymbol
        .pipe(
          filter(value => !!value)
        )
        .subscribe(this.printNextSymbol)
    );
    this.subs.add(
      this.paperData.nextLine
        .subscribe(this.goToNextLine)
    );
    this.subs.add(
      this.paperData.isBack
        .pipe(
          filter(value => !!value),
          filter(() => this.offsetXCurrent >= this.offsetXStart + 10)
        )
        .subscribe(this.goBack)
    );
    this.subs.add(
      this.paperData.isClear
        .subscribe(this.clear)
    );
    this.subs.add(
      this.paperData.movePaper
        .pipe(
          filter(value => {
            if(value > 0) {
              return this.translateY >= -900;
            } else {
              return this.translateY <= 0;
            }
          })
        )
        .subscribe(this.movePaper)
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
