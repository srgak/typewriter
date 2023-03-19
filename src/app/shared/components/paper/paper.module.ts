import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from './paper.component';
import { PaperReadyModule } from 'src/app/shared/directives/paper/paper-ready.module';



@NgModule({
  declarations: [PaperComponent],
  imports: [
    CommonModule,
    PaperReadyModule
  ],
  exports: [PaperComponent]
})
export class PaperModule { }
