import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { PrintedLetter } from 'src/app/shared/models/interfaces';
import { ModalService } from 'src/app/shared/services/modal.service';
import { foldPaper, toggleEnvelope } from './letter-preview.animation';

@Component({
  selector: 'typewriter-letter-preview',
  templateUrl: './letter-preview.component.html',
  styleUrls: ['./letter-preview.component.less'],
  animations: [
    foldPaper,
    toggleEnvelope
  ]
})
export class LetterPreviewComponent implements OnInit, AfterViewInit {
  @Input() public data!:  PrintedLetter[];
  @ViewChild('paper', {static: true}) public paperRef!: ElementRef;
  @ViewChildren('paperPart') public paperPartList!: QueryList<ElementRef>;
  @HostBinding('style.overflow-y') private overflow: string = 'scroll';

  private paperEl!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  public isShowPaper: boolean = true;
  public letterState: string = '';

  constructor(
    private readonly renderer2: Renderer2,
    private readonly modal: ModalService
  ) { }

  public initPaper(data: any): void {
    this.paperEl = data.el;
    this.ctx = data.ctx;
    this.data?.forEach(letter => {
      this.ctx?.fillText(letter.name, letter.x, letter.y);
    });
  }

  public onSend(): void {
    this.letterState = 'wrap';
    this.overflow = 'hidden';
  }

  public onCloseEnvelope(event: any): void {
    if(event.toState) this.modal.currentModal.next(null);
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    const imgUrl = this.paperEl.toDataURL('image/jpeg');

    this.paperPartList.forEach(item => {
      const el = item.nativeElement;

      this.renderer2.setStyle(el, 'background-image', `url(${imgUrl})`);
    });
  }
}
