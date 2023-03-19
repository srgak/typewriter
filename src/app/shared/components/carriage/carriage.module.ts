import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarriageComponent } from './carriage.component';
import { PaperModule } from '../paper/paper.module';
import { ScrollWheelModule } from '../scroll-wheel/scroll-wheel.module';
import { AutoblurButtonModule } from 'src/app/shared/directives/autoblur-button/autoblur-button.module';



@NgModule({
  declarations: [CarriageComponent],
  imports: [
    CommonModule,
    PaperModule,
    ScrollWheelModule,
    AutoblurButtonModule
  ],
  exports: [CarriageComponent]
})
export class CarriageModule { }
