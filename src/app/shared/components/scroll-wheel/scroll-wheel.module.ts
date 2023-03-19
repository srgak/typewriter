import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollWheelComponent } from './scroll-wheel.component';
import { AutoblurButtonModule } from 'src/app/shared/directives/autoblur-button/autoblur-button.module';



@NgModule({
  declarations: [ScrollWheelComponent],
  imports: [
    CommonModule,
    AutoblurButtonModule
  ],
  exports: [ScrollWheelComponent]
})
export class ScrollWheelModule { }
