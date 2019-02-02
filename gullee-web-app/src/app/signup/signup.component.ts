import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { NetworkManagerService } from '../network-manager.service';

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
  constructor(private networkManagerService: NetworkManagerService) { }

  ngOnInit() {
  }

signup(){

  var requestJson = 
  {
    first_name: "test f name",
    last_name: "test l name",
    email: "test email",
    password: "test pass",
    username: "test user"
  }

  this.networkManagerService.testFunc();
  console.log(requestJson.first_name);

  this.networkManagerService.handleSignUp(requestJson).subscribe(
    data => {
      console.log("Post successful");
    }, error => {
      console.log("error", error);
    });
}
}
