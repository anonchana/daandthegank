import { TopicService } from './services/topic.service';
import { AccountService } from './services/account.service';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TopicComponent } from './topic/topic.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';

import { AccountComponent } from './account/account.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    TopicComponent,
    LeftbarComponent,
    ViewComponent,
    LoginComponent,
    UserComponent,
    AccountComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService,TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
