import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators } from'@angular/forms';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

firstNameControl = new FormControl('', [Validators.required])
lastNameControl = new FormControl('', [Validators.required])
passControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)  ] )
emailControl = new FormControl('', [Validators.required, Validators.email] )


registerForm = new FormGroup({
  firstName: this.firstNameControl,
  lastName: this.lastNameControl,
  pass: this.passControl,
  email: this.emailControl,
})



onSubmit(){
console.log(this.registerForm.value);
  this.registerForm.reset();
}



}