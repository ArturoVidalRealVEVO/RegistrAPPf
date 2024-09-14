import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage{
  user = {
    usuario: '',
  };
  mensaje = '';


  constructor(private navCtrl: NavController) {}

  recuperar() {
    if (this.user.usuario.length === 0) {
      this.mensaje = 'Por favor ingrese un usuario.';
      console.log('Usuario vacío');
    } else {
      this.mensaje = 'Se ha enviado un enlace de recuperación a su correo electrónico.';
      console.log('Usuario ingresado. Enviando enlace de recuperación...');
    }
  }
}