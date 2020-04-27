import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';
import { LeavesListComponent } from './modules/leaves-list/leaves-list.component';
import { LeaveDetailsComponent } from './modules/leave-details/leave-details.component';
import { AddEditLeaveComponent } from './modules/add-edit-leave/add-edit-leave.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import{UserCommonService} from '../app/modules/shared/services/user-common.service'
// import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignOutComponent,
    LoaderComponent,
    LeavesListComponent,
    LeaveDetailsComponent,
    AddEditLeaveComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LayoutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
