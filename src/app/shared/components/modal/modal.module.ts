import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { RefModule } from 'src/app/shared/directives/ref/ref.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    RefModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
