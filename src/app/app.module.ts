import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TopicComponent } from './topic/topic.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    TopicComponent,
    LeftbarComponent,
    ViewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
