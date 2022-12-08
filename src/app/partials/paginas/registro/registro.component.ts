import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators } from'@angular/forms';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

firstNameControl = new FormControl('Nombre', [Validators.required])
lastNameControl = new FormControl('Apellido', [Validators.required])
passControl = new FormControl('Contraseña', [Validators.required, Validators.minLength(8), Validators.maxLength(10)  ] )


registerForm = new FormGroup({
  firstName: this.firstNameControl,
  lastName: this.lastNameControl,
  pass: this.passControl,
})
}
