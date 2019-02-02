import { Component, OnInit } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  usernameStr:string
  passwordStr:string
  constructor(private networkManagerService: NetworkManagerService, private router: Router) { }

  ngOnInit() {
  }

  handleLoginIn(){

    console.log("username is: ", this.usernameStr);

    this.networkManagerService.getUsers().subscribe(
      res => {
        var usersData = res
        var isUserExist = false

        usersData.forEach(element => {
          // console.log("element is: ", element.username);
          if(element.username == this.usernameStr && element.password == this.passwordStr){
            console.log("USER EXISTS!! LOGIN BABY");
            isUserExist = true
            this.networkManagerService.postLoginUserId(element.id)
            console.log(element.id);
          }
        });


        //redirect user to home page
        if(isUserExist == true){
          this.router.navigate(['/home']);
        }





      }
    )
  }





}
