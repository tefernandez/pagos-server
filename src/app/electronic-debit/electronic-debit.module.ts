import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ElectronicDebitComponent } from './pages/electronic-debit/electronic-debit.component';
import { LoginEcComponent } from './pages/login-ec/login-ec.component';
import { AppRoutingModule } from '../app-routing.module';
import { VerificationEcComponent } from './pages/verification-ec/verification-ec.component';


const appRoutes: Routes = [
  { path: 'login-ec', component: LoginEcComponent }
]

@NgModule({
  declarations: [
    ElectronicDebitComponent,
    LoginEcComponent,
    VerificationEcComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    LoginEcComponent
  ]
})
export class ElectronicDebitModule { }
