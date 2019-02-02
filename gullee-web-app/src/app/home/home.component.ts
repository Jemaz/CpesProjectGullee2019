import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Messages=[{id:1,m:"i really like the C++ course"},{id:2,m:"very good at time manegment "},{id:3,m:"need more work on slides"}];

  constructor() { }

  ngOnInit() {
  }
like(){
////////////////liked msg
}
deleted(){}


}
