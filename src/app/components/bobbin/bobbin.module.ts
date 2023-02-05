import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BobbinComponent } from './bobbin.component';



@NgModule({
  declarations: [BobbinComponent],
  imports: [
    CommonModule
  ],
  exports: [BobbinComponent]
})
export class BobbinModule { }
