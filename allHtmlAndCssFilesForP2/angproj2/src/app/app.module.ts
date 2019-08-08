import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdduserComponent } from './adduser/adduser.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserlistComponent } from './userlist/userlist.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UserDetailsComponent,
    UserlistComponent,
    LoginComponent,
    ProfileComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
