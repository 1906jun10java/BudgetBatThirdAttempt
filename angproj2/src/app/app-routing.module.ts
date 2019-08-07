import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'add', component: AdduserComponent },
  { path: 'user', component: UserlistComponent },
  { path: 'details/:id', component: UserDetailsComponent },


]


@NgModule({

  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
