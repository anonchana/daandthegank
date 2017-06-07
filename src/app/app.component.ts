import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alenz';
  user = {name: 'non', password: 'non'};
  result;
  Password;
  
  Yes(Username,Password){
    // alert('Yes do it')
    if(Password == '1234'){
      this.result = 'Log in Success';
    }
    else
      this.result = Username + ' ,Check U Pass.';
      this.Password ="";
  }
}
