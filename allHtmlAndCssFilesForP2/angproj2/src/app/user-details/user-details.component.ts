
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user:User;
  constructor(private route:ActivatedRoute,
     private router: Router,
      private userService: UserserviceService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
    .subscribe(data => {
      console.log(data);
      this.user =  data;
    },error => console.log(error));
    
  }
  list(){
    this.router.navigate(['user']);
  }

}
