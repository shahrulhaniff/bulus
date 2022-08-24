import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonGuardService } from './services/anonGuard/anon-guard.service';
import { UserGuardService } from './services/userGuard/user-guard.service';

const routes: Routes = [
  {
    path: "register",
    canActivate: [AnonGuardService], 
    loadChildren: () =>
      import("./pages/register/register.module").then((m) => m.RegisterModule),
  },
  {
    path: "login",
    canActivate: [AnonGuardService], 
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "dashboard",
    canActivate: [UserGuardService], 
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "landingpage",
    canActivate: [UserGuardService], 
    loadChildren: () =>
      import("./pages/landingpage/landingpage.module").then((m) => m.LandingpageModule),
  },

  // yg ni else ... selain atas tu :D
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'haha', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
