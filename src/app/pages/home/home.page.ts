import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  recetas: any = [];

  usuarios: any[] = [];
  nuevoUsuario: { nombre: string; email: string; };
  usuarioLogueado: any = null;
  
  constructor(private usuarioService: UsuarioService) {
    this.nuevoUsuario = { nombre: '', email: '' };
  }

  ngOnInit() {
    // Obtener la lista de usuarios
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    }, error => {
      console.error('Error al obtener usuarios', error);
    });

    // Obtener el usuario logueado desde localStorage
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuarioLogueado = JSON.parse(usuarioString); // Asigna a la propiedad de clase
      console.log('Usuario logueado:', this.usuarioLogueado);
      
      // Verificación de los datos del usuario logueado
      if (this.usuarioLogueado && this.usuarioLogueado.id) {
        this.usuarioService.getRecetas(this.usuarioLogueado.id).subscribe(
          (data: any[]) => {  // Aquí asumimos que data es un array de recetas
            this.recetas = data; // Asigna las recetas a tu propiedad de clase
            console.log('Recetas obtenidas:', this.recetas);
          },
          (error: any) => {
            console.error("Error fetching recetas:", error);
          }
        );
      } else {
        console.log('Usuario logueado no tiene ID');
      }
    } else {
      console.log('No hay usuario logueado en localStorage');
    }
  }

  getMedicamentosPorDia(dia: string) {
    return this.recetas.filter((receta: any) => receta.dia_semana === dia);
  }

  agregarUsuario() {
    const usuario = {
      nombre: this.nuevoUsuario.nombre,
      email: this.nuevoUsuario.email,
    };

    this.usuarioService.agregarUsuario(usuario).subscribe(data => {
      console.log('Usuario creado', data);
      this.usuarios.push(data);
    }, error => {
      console.error('Error al crear usuario', error);
    });
  }

}
