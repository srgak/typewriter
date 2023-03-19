import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[autoblurButton]'
})
export class AutoblurButtonDirective {

  public el!: HTMLButtonElement;

  @HostListener('click') private onClick(): void {
    this.el.blur();
  }

  constructor(
    private readonly elRef: ElementRef
  ) {
    this.el = elRef.nativeElement;
  }

}
