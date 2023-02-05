import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { KeyboardModule } from '../keyboard/keyboard.module';
import { MechanismModule } from '../mechanism/mechanism.module';
import { CarriageModule } from '../carriage/carriage.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    KeyboardModule,
    MechanismModule,
    CarriageModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
