import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router class
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  run: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { } // Use Router instead of Route

  ngOnInit() {
  }

  login() {
    const usuario = {
      run: this.run,
      password: this.password
    };

    this.usuarioService.login(this.run, this.password).subscribe(data => {
      console.log('Usuario logueado', data);
      //Funcion para almacenar el usuario en el localStorage

      localStorage.setItem('usuario', JSON.stringify(data));
      // redireccionar a pagina tabs/home
      // You can use the router to navigate to the tabs/home page
      this.router.navigate(['/tabs/home']);

    }, error => {
      console.error('Error al loguear usuario', error);
    });  
  }
}