// ----Angular---- //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  ----Pages---- //
import { ElectronicDebitComponent } from './electronic-debit/pages/electronic-debit/electronic-debit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'debito-electronico',
    component: ElectronicDebitComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
