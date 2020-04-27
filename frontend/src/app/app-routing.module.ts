import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationValidationService } from './modules/shared/services/authentication-validation.service';
import { AddEditLeaveComponent } from './modules/add-edit-leave/add-edit-leave.component';
import { LeavesListComponent } from './modules/leaves-list/leaves-list.component';
import { LeaveDetailsComponent } from './modules/leave-details/leave-details.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
    // canActivate: [AuthenticationValidationService]
  },
  {
    path: 'login',
    component: SignInComponent,
    // pathMatch: 'full',
 
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: RegistrationComponent
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'leaves',
        pathMatch: 'full',
        component: LeavesListComponent,
        data: { title: '', breadCrumbs: '' }
      },
      {
        path: 'leave-details',
        pathMatch: 'full',
        component: LeaveDetailsComponent,
        data: { title: '', breadCrumbs: '' }
      },
      {
        path: 'add-leave',
        pathMatch: 'full',
        component: AddEditLeaveComponent,
        data: { title: '', breadCrumbs: '' }
      },
      {
        path: 'edit-leave',
        pathMatch: 'full',
        component: AddEditLeaveComponent,
        data: { title: '', breadCrumbs: '' }
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
