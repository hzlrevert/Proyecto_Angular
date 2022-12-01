import { Component } from '@angular/core';
import { students } from '../../modelos/estudiante';

@Component({
  selector: 'app-pagina-estudiante',
  templateUrl: './pagina-estudiante.component.html',
  styleUrls: ['./pagina-estudiante.component.css']
})
export class PaginaEstudianteComponent {

 students: students[]=[
  new students (1,'Haziel','Revert', new Date('1994-06-19'),true),
  new students (2,'poiu','qwef', new Date('1999-09-12'),false),
  new students (3,'Generico','dos', new Date('1984-03-4'),true),
 ]

}
