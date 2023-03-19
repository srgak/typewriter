import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoblurButtonDirective } from './autoblur-button.directive';



@NgModule({
  declarations: [AutoblurButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [AutoblurButtonDirective]
})
export class AutoblurButtonModule { }
