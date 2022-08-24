import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard X',
      breadcrumb: 'Overall Dashboard Bulus vs Molla Report',
      icon: 'icofont-list bg-c-blue',
      breadcrumb_caption: 'List of Overall Dashboard Bulus Report',
      status: true
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
