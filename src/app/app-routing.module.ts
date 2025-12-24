import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisconnectComponent } from './disconnect/disconnect.component';
import { ToysFactoryComponent } from './toys-factory/toys-factory.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  {
    path: 'delivery',
    component: DashboardComponent
  },
  {
    path: 'legal',
    component: LegalComponent
  },
  {
    path: 'toys-factory',
    component: ToysFactoryComponent
  },
  {
    path: 'disconnect',
    component: DisconnectComponent
  },
  {
    path: '',
    redirectTo: 'delivery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
