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

topicArray = [{
  comment:'สวัสดี Angular2++++',
  image:'ยังไม่มีรูปภาพพพพพพพ',
  newsFeed:'ยังไม่มีข่าวววววววววรอนนนทำ'
}]


  user = { name: 'non', password: 'non' };
  pathImage = [
    'https://myanimelist.cdn-dena.com/images/anime/9/84460l.jpg',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
    'http://static.tvtropes.org/pmwiki/pub/images/25ce2156797499ef52e56861021a48b2.jpg',
    'http://img1.ak.crunchyroll.com/i/spire3/cbb55a6382682bf71e91f685c6473c5a1487736090_full.jpg',
    'https://myanimelist.cdn-dena.com/images/anime/10/78745.jpg'
  ];

  feedArray = [{comment: '',pathImage: this.pathImage[0]},
  {comment: '',pathImage: this.pathImage[1]},
  {comment: '',pathImage: this.pathImage[2]},
  {comment: '',pathImage: this.pathImage[3]},
  {comment: '',pathImage: this.pathImage[4]}]

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

