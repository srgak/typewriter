import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardButtonComponent } from './keyboard-button.component';



@NgModule({
  declarations: [KeyboardButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [KeyboardButtonComponent]
})
export class KeyboardButtonModule { }
