import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anon',
  templateUrl: './anon.component.html',
  styleUrls: ['./anon.component.css']
})
export class AnonComponent implements OnInit {
  message:string
  done:boolean=false
  constructor() { }

  ngOnInit() {
  }
  submitm(){
    this.done=true
/////////////////////////send message to DB 

  }
}
