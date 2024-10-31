import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/api'; 
  private apiUrlLog = 'http://localhost:3000/api/usuarios/login';
  private apiUrlRecetas = 'http://localhost:3000/api/receta';
  private apiUrlSalud = 'http://localhost:3000/api/salud_usuario';
  private apiUrlHistorial = 'http://localhost:3000/api/historial_clinico';
  private apiUrlCita = 'http://localhost:3000/api/cita';


  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }
  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }
  login(run: string, password: string): Observable<any> {
    const usuario = { run, password };
    return this.http.post(`${this.apiUrlLog}`, usuario);
  }
  getRecetas(idUsuario: number): Observable<any> {
    return this.http.get(`${this.apiUrlRecetas}/${idUsuario}`);
  }

  miSalud(idUsuario: number): Observable<any> {
    return this.http.get(`${this.apiUrlSalud}/${idUsuario}`);
  }

  getHistorial(idUsuario: number): Observable<any> {
    return this.http.get(`${this.apiUrlHistorial}/${idUsuario}`);
  }

  postCita(cita: any): Observable<any> {
    return this.http.post(this.apiUrlCita, cita);
  }

  // Método para verificar si un RUN está disponible
checkRun(run: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/usuarios/checkRun/${run}`);
}

  registerUser(newUser: any): Promise<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, newUser).toPromise();
  }
}
