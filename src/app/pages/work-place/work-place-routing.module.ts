import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkPlaceComponent } from "./work-place.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: '',
    component: WorkPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkPlaceRouting {}