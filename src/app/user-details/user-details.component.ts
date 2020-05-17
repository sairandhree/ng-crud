import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  username:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formJson){
    console.log(formJson);
  }

}
