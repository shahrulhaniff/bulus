import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonGuardService } from './services/anonGuard/anon-guard.service';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { UserGuardService } from './services/userGuard/user-guard.service';
import {MenuComponent} from './layout/menu/menu.component';

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
    path: "landingpage",
    canActivate: [UserGuardService], 
    loadChildren: () =>
      import("./pages/landingpage/landingpage.module").then((m) => m.LandingpageModule),
  },
  // {
  //   path: "myprofileX",
  //   canActivate: [UserGuardService], 
  //   loadChildren: () =>
  //     import("./pages/myprofile/myprofile.module").then((m) => m.MyprofileModule),
  // },

  // yg ni else ... selain atas tu :D
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "home",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "dashboard",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "myprofile",
        canActivate: [UserGuardService],
        loadChildren: () =>
          import("./pages/myprofile/myprofile.module").then((m) => m.MyprofileModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: 'haha', redirectTo: 'login' },
  { path: '**', redirectTo: 'landingpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
