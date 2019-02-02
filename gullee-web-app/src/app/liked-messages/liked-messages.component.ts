import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-messages',
  templateUrl: './liked-messages.component.html',
  styleUrls: ['./liked-messages.component.css']
})
export class LikedMessagesComponent implements OnInit {
  Messages=[{id:1,m:"i really like the C++ course"}]
  constructor() { }

  ngOnInit() {
  }
 
}

