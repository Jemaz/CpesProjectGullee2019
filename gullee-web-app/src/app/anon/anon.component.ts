import { Component, OnInit } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';

@Component({
  selector: 'app-anon',
  templateUrl: './anon.component.html',
  styleUrls: ['./anon.component.css']
})
export class AnonComponent implements OnInit {
  message:string
  done:boolean=false
  constructor(private networkManagerService: NetworkManagerService) { }

  ngOnInit() {
    this.networkManagerService.testFunc();
  }
  submitm(){
    this.done=true


  //writing to message table

  var requestJson = 
  {
    "message": "test mssg from angular",
    "is_liked": 1
  }

  this.networkManagerService.anonWriteMessage(requestJson).subscribe();




  }
}
