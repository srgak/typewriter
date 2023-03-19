import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefDirective } from './ref.directive';



@NgModule({
  declarations: [RefDirective],
  imports: [
    CommonModule
  ],
  exports: [RefDirective]
})
export class RefModule { }
