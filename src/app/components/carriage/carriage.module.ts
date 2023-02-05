import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarriageComponent } from './carriage.component';
import { PaperModule } from '../paper/paper.module';



@NgModule({
  declarations: [CarriageComponent],
  imports: [
    CommonModule,
    PaperModule
  ],
  exports: [CarriageComponent]
})
export class CarriageModule { }
