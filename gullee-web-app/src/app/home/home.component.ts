import { Component, OnInit } from '@angular/core';
import { NetworkManagerService } from '../network-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Messages=[];

  constructor(private networkManagerService: NetworkManagerService) { }

  ngOnInit() {

    var currentUserLoggedInId = this.networkManagerService.getLoginUserId();

    this.networkManagerService.getMessagesFromId(currentUserLoggedInId).subscribe(res => {
      var messagesData = res

      messagesData.forEach(element => {

        var messageObject = {id: 0, m: ""}

        messageObject.id = element.id
        messageObject.m = element.message

        this.Messages.push(messageObject)


      });

      console.log("Messages are: ", this.Messages);


    })

  }
like(){
////////////////liked msg
}
deleted(){}


}
