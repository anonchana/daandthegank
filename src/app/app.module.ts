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
<<<<<<< HEAD
import { UserComponent } from './user/user.component';
=======
import { AccountComponent } from './account/account.component';
>>>>>>> bb3227d0ad619fabd6cab339679a598b614a9d08



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    TopicComponent,
    LeftbarComponent,
    ViewComponent,
    LoginComponent,
<<<<<<< HEAD
    UserComponent
=======
    AccountComponent
>>>>>>> bb3227d0ad619fabd6cab339679a598b614a9d08

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
