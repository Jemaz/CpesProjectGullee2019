import { Component, OnInit } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usernameInput:string
  passwordInput:string

  constructor(private networkMangerService: NetworkManagerService, private router: Router) { }

  ngOnInit() {
  }

  save(){

    var requestJson = 
    {
      username: this.usernameInput,
      password: this.passwordInput
    }

    this.networkMangerService.changeProfileInfo(requestJson).subscribe()



  }

  handleLogout(){
    this.networkMangerService.handleLogout()

    this.router.navigate(['/login']);
  }


}
