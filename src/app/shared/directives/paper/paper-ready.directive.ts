import { Directive, ElementRef, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { PaperInfo } from '../../models/interfaces';
import { PAPER_INFO } from '../../models/paper-token';

@Directive({
  selector: '[paperReady]'
})
export class PaperReadyDirective implements OnInit {
  @Output() public onReady: EventEmitter<any> = new EventEmitter<any>();

  private paperEl!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;

  constructor(
    @Inject(PAPER_INFO) private readonly info: PaperInfo,
    private readonly renderer2: Renderer2,
    private readonly elRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.paperEl = this.elRef.nativeElement;
    this.ctx = this.paperEl.getContext('2d');
    this.renderer2.setProperty(this.paperEl, 'width', this.info.width);
    this.renderer2.setProperty(this.paperEl, 'height', this.info.height);
    this.ctx!.fillStyle = this.info.color;
    this.ctx!.font = '14px Courier New';
    this.ctx!.textAlign = 'center';
    this.ctx?.fillRect(0, 0, this.info.width, this.info.height);
    this.ctx!.fillStyle = 'black';
    this.onReady.emit({
      el: this.paperEl,
      ctx: this.ctx
    });
  }
}
