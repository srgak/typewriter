import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard.component';
import { KeyboardButtonModule } from '../keyboard-button/keyboard-button.module';



@NgModule({
  declarations: [KeyboardComponent],
  imports: [
    CommonModule,
    KeyboardButtonModule
  ],
  exports: [KeyboardComponent]
})
export class KeyboardModule { }
