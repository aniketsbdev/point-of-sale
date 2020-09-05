import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SaleWindowComponent } from './sale-window/sale-window.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'sale-window', component: SaleWindowComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
