import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AnonComponent } from './anon/anon.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignComponent } from './sign/sign.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LikedMessagesComponent } from './liked-messages/liked-messages.component';
import { ProfileComponent } from './profile/profile.component';

export const routs = [
  {
    path: 'write',
    component: AnonComponent
  },
{path:'signup',
component:SignupComponent},
{path:'login',
component:SignComponent},
{path:'home',
component:HomeComponent},
{path:'like',
component:LikedMessagesComponent},
{path:'profile',
component:ProfileComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AnonComponent,
    SignComponent,
    SignupComponent,
    HomeComponent,
    LikedMessagesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
