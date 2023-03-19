import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[typewriterRef]'
})
export class RefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { 
    
  }

}
