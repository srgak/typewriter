import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPlaceComponent } from './work-place.component';
import { MainModule } from 'src/app/shared/components/main/main.module';
import { WorkPlaceRouting } from './work-place-routing.module';



@NgModule({
  declarations: [WorkPlaceComponent],
  imports: [
    CommonModule,
    WorkPlaceRouting,
    MainModule
  ]
})
export class WorkPlaceModule { }
