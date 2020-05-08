import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
 showUser: boolean = false;

  changeTheTitle(value){
    //chage the title only if someconditions are me
    //else discard the changes
    this.title = value;
  }

  toggleUser(){
    this.showUser = !this.showUser ;
  }

}
