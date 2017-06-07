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
  user = { name: 'non', password: 'non' };

  userArray = [
{ name:'Top', cellphone:'11112',email:'top@emew.com'}
,{ name:'Ploy', cellphone:'22221',email:'ploy@emew.com'}
,{ name:'Koi', cellphone:'1325235325',email:'koi@emew.com'}
,{ name:'Noi', cellphone:'3123123125',email:'Noi@emew.com'}
,{ name:'Tan', cellphone:'3123123123',email:'Tan@emew.com'}
  ];

  singnIn(username, password) {
    // alert('Hello');
    if (password == "1234") {
      this.result = "Login Succsess";
    } else {
      this.result = "Please check your password";
      this.password = "";
    }

  }

  addNewUser(newName,newPhone,NewEmail){

    let newUser = {name: newName, cellphone:'',email:''};

    this.userArray.push( newUser);


  }
}

