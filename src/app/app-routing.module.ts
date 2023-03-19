import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'work-place'
  },
  {
    path: 'work-place',
    pathMatch: 'full',
    loadChildren: () => import('./pages/work-place/work-place.module').then(m => m.WorkPlaceModule),
    data: {
      animation: 'PageMain'
    }
  },
  {
    path: 'messages',
    pathMatch: 'full',
    loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule),
    data: {
      animation: 'PageMessages'
    }
  },
  // {
  //   path: 'settings',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
