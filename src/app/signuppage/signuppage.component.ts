import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {

  userForm = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    homeaddress: new FormControl('',Validators.required),
    emailaddress: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    repeatPassword: new FormControl()
});

//========= FUNCTION BUTTON TO CHECK PASSWORD = REPEATPASSWORD =========//
  submitbtn(){
    if( this.userForm.get('password')?.value != this.userForm.get('repeatPassword')?.value){
      alert("Passwords don’t match")
    }
  }
}
