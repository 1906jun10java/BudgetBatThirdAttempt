import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Observable } from "rxjs";
import { UserserviceService } from "../userservice.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private service:UserserviceService ,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.service.getUserList();
  }

  deleteUser(id: number) {
    this.service.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number){
    this.router.navigate(['details', id]);
  }


}
