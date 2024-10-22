import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  usuarioLogueado: any = null;
  historial: any[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    // Obtener el usuario logueado desde localStorage
  const usuarioString = localStorage.getItem('usuario');
  if (usuarioString) {
    this.usuarioLogueado = JSON.parse(usuarioString); // Asigna a la propiedad de clase
    console.log('Usuario logueado:', this.usuarioLogueado);

    // obtener el historial del usuario logueado
    this.usuarioService.getHistorial(this.usuarioLogueado.id).subscribe(
      (data: any) => {
        console.log('Historial obtenido:', data);
        
        // Verificar la estructura de datos recibida
        if (Array.isArray(data)) {
          this.historial = data; // Asigna los datos directamente si es un arreglo
        } else {
          console.error('El historial no es un arreglo:', data);
        }
      },
      (error: any) => {
        console.error('Error al obtener el historial del usuario:', error);
      }
    );
  } else {
    console.log('No hay usuario logueado en localStorage');
  }
}


}