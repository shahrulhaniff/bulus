import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HomeComponent } from './home.component';
//import {BasicLoginRoutingModule} from './basic-login-routing.module';
//import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
//import { ToastyModule } from 'ng2-toasty';
//import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    //BasicLoginRoutingModule,
    //SharedModule,
    //ReactiveFormsModule,
    FormsModule,
    //ToastyModule.forRoot(),
    //NgxSpinnerModule
    HomeRoutingModule
  ],
  //declarations: [HomeComponent]
})
export class HomeModule { }