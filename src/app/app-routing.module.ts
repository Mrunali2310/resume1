import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { ProfileComponent } from './profile/profile.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  
    {
      component:BillingComponent,
      path:'Billing'
    },
    
    {
      component:ManageComponent,
      path:'Manage'
    },
    {
      component:DashboardComponent,
      path:'Dashboard'
    },
    {
      component:ProfileComponent,
      path:'Profile'
    },
    {
      component:SignoutComponent,
      path:'Sign out'
    },
    
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
