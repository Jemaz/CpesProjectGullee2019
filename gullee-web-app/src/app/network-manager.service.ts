import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class NetworkManagerService {

  private baseUrl = 'http://localhost:3000/api/';
  private userIdLoggedIn;

  constructor(private http: HttpClient) { }

  testFunc(){
    console.log("test")
  }

  anonWriteMessage(postRequestJson: any){
    return this.http.post(this.baseUrl + 'messages', postRequestJson, httpOptions);
  }

  handleSignUp(postRequestJson: any){
    return this.http.post(this.baseUrl + 'users', postRequestJson, httpOptions);
  }

  getUsers(){
    return this.http.get(this.baseUrl + 'users', httpOptions);
  }

  postLoginUserId(id: number){
    this.userIdLoggedIn = id;
  }

  getLoginUserId(){
    return this.userIdLoggedIn;
  }

  getMessagesFromId(id: number){
    return this.http.get("http://localhost:3000/api/users/" + id.toString() + "/messages", httpOptions);
  }


}


