import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-my-health',
  templateUrl: './my-health.page.html',
  styleUrls: ['./my-health.page.scss'],
})
export class MyHealthPage implements OnInit {
  usuarioLogueado: any = null;
  datosSalud: any = {};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    // Obtener el usuario logueado desde localStorage
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuarioLogueado = JSON.parse(usuarioString); // Asigna a la propiedad de clase
      console.log('Usuario logueado:', this.usuarioLogueado);

      // obtener la salud del usuario logueado
      this.usuarioService.miSalud(this.usuarioLogueado.id).subscribe((data: any) => {
        console.log('Salud obtenida:', data);
        // Guardar los datos de salud en una variable o propiedad de clase
        
        this.datosSalud = data;
      }, (error: any) => {
        console.error('Error al obtener la salud del usuario:', error);
      });
    } else {
      console.log('No hay usuario logueado en localStorage');
    }
  }

}
