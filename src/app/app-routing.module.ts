import { VerificationEcComponent } from './electronic-debit/pages/verification-ec/verification-ec.component';
import { LoginEcComponent } from './electronic-debit/pages/login-ec/login-ec.component';
// ----Angular---- //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  ----Pages---- //
import { ElectronicDebitComponent } from './electronic-debit/pages/electronic-debit/electronic-debit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'debito-electronico',
    pathMatch: 'full'
  },
  {
    path: 'debito-electronico',
    component: ElectronicDebitComponent
  },
  {
    path: 'login-ec',
    component: LoginEcComponent
  },
  {
    path: 'verification-ec',
    component: VerificationEcComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
