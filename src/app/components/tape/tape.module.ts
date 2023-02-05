import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapeComponent } from './tape.component';



@NgModule({
  declarations: [TapeComponent],
  imports: [
    CommonModule
  ],
  exports: [TapeComponent]
})
export class TapeModule { }
