import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
user: User = new User();
submitted = false;
  constructor(private service: UserserviceService, private router: Router) { }

  ngOnInit() {
  }

newUser():void{
  this.submitted = false;
  this.user = new User();
}
onSubmit(){
  this.submitted =true;
  this.save();
}
  save() {
    throw new Error("Method not implemented.");
  }
gotoList(){
  this.router.navigate(['/user']);
}

}
