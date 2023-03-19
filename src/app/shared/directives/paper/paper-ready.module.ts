import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperReadyDirective } from './paper-ready.directive';



@NgModule({
  declarations: [PaperReadyDirective],
  imports: [
    CommonModule
  ],
  exports: [PaperReadyDirective]
})
export class PaperReadyModule { }
