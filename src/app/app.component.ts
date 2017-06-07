import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alenz';
  user = { name: 'non', password: 'non' };
  result;
  password;

  signIn(username, password) {
    if (password === '1234') {
      this.result = "login success";
    } else {
      this.result = "check your password";
      this.password = "";
    }
  }
}
