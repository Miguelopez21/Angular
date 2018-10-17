import { Component, OnInit } from '@angular/core';
import {user} from '../shared/user';
import { timeout } from 'q';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  /* primerNombre:string ;
   segundoNombre:string;
   primerApellido:string;
   segundoApellido:string;
   perfilProfesional:string;*/
  user:user = {
    primerNombre: "Miguel",
    segundoNombre: "Andrey",
    primerApellido: "Lopez",
    segundoApellido: "Ruiz",
    perfilProfesional: "Esto es un perfil"
  };

  constructor() { }

  ngOnInit() {
     setTimeout(() => {
       this.user.primerNombre="Angelo"
       this.user.primerApellido="Romero"
       this.user.segundoApellido="Lopez";
       this.user.segundoNombre="Salvador"
     }, 5000);
  }

}
