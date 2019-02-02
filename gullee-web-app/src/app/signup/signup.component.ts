import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string
  Lastname:String 
  Firstname:string
  email:string
  password:string
  constructor() { }

  ngOnInit() {
  }
signup(){

}
}
