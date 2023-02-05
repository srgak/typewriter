import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { PaperService } from 'src/app/services/paper.service';

@Component({
  selector: 'typewriter-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.less']
})
export class PaperComponent implements OnInit, OnDestroy {
  @ViewChild('paper', {static: true}) public paperRef!: ElementRef;

  private offsetXStart: number = 30;
  private offsetXCurrent: number = this.offsetXStart;
  private offsetYStart: number = 80;
  private offsetYCurrent: number = this.offsetYStart;
  private translateY: number = 0;
  private paperEl!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private subs: Subscription = new Subscription();

  constructor(
    private renderer2: Renderer2,
    private paperData: PaperService
  ) { }

  get transformValue(): string {
    return `translateY(${this.translateY}px)`;
  }

  ngOnInit(): void {
    this.paperEl = this.paperRef.nativeElement;
    this.renderer2.setProperty(this.paperEl, 'width', 775);
    this.renderer2.setProperty(this.paperEl, 'height', 1000);
    this.ctx = this.paperEl.getContext('2d');
    this.ctx!.font = '16px Courier New';
    this.ctx!.textAlign = 'center';
    this.ctx!.save();
    this.subs.add(
      this.paperData.nextSymbol
        .pipe(
          filter(val => !!val)
        )
        .subscribe(val => {
          this.offsetXCurrent += 10;
          this.ctx?.fillText(val, this.offsetXCurrent, this.offsetYCurrent);
        })
    );
    this.subs.add(
      this.paperData.nextLine
        .subscribe(() => {
          this.offsetXCurrent = this.offsetXStart;
          this.offsetYCurrent += 20;
          this.translateY -= 20;
          this.renderer2.setStyle(this.paperEl, 'transform', this.transformValue);
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
        })
    );
    this.subs.add(
      this.paperData.isClear
        .subscribe(() => {
          this.ctx!.clearRect(0, 0, this.paperEl.width, this.paperEl.height);
          this.offsetXCurrent = this.offsetXStart;
          this.offsetYCurrent = this.offsetYStart;
          this.translateY = 0;
          this.renderer2.setStyle(this.paperEl, 'transform', this.transformValue);
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
