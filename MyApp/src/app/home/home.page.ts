import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    usuario: '',
    password: '',
  };
  mensaje = '';
  barra = false;

  constructor(private router: Router) {}

  barraMostrar() {
    this.barra = !this.barra;
  }

  validar() {
    if (this.user.usuario.length != 0) {
      if (this.user.password.length != 0) {
        this.mensaje = 'Iniciando Sesion';
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.usuario,
            password: this.user.password,
          },
        };
        this.barraMostrar();
        setTimeout(() => {
          this.router.navigate(['/inside'], navigationExtras);
          this.barraMostrar();
          this.mensaje = "";
        }, 3000);
      
      } else {
        console.log('Contraseña vacia');
        this.mensaje = 'Falta Contraseña';
      }
    } else {
      console.log('Usuario vacio');
      this.mensaje = 'Escribir Usuario y Contraseña validos';
    }
  }
}