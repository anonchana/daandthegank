import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alenz';
  result;
  password;
  user = {name: 'non', password: 'non'};
  singnIn(username,password){
   // alert('Hello');
   if(password=="1234"){
      this.result="Login Succsess";
   }else{
      this.result ="Please check your password";
      this.password ="";
   }
  }
}

