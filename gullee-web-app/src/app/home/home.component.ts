import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Messages=[{id:1,m:"fkqjw"},{id:2,m:"jnjnkjw"},{id:3,m:"jnkj"}];
  constructor() { }

  ngOnInit() {
  }

}
