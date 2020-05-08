import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'myuserdetails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 myuser: User;

  constructor() {
    this.myuser = new User("asdfasdf", "asdf@sdfs.com");
    this.myuser.dateOfBirth = new Date();
   }

  ngOnInit(): void {
  }

}
