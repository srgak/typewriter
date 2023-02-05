import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from './paper.component';



@NgModule({
  declarations: [PaperComponent],
  imports: [
    CommonModule
  ],
  exports: [PaperComponent]
})
export class PaperModule { }
