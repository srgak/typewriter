import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanismComponent } from './mechanism.component';
import { LigatureModule } from '../ligature/ligature.module';
import { BobbinModule } from '../bobbin/bobbin.module';
import { TapeModule } from '../tape/tape.module';



@NgModule({
  declarations: [MechanismComponent],
  imports: [
    CommonModule,
    LigatureModule,
    BobbinModule,
    TapeModule
  ],
  exports: [MechanismComponent]
})
export class MechanismModule { }
