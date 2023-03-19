import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperReadyModule } from 'src/app/shared/directives/paper/paper-ready.module';
import { LetterPreviewComponent } from './letter-preview.component';



@NgModule({
  declarations: [LetterPreviewComponent],
  imports: [
    CommonModule,
    PaperReadyModule
  ],
  exports: [LetterPreviewComponent]
})
export class LetterPreviewModule { }
