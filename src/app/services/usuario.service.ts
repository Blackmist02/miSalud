import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';
  private apiUrlLog = 'http://localhost:3000/api/usuarios/login';
  private apiUrlRecetas = 'http://localhost:3000/api/receta';
  private apiUrlSalud = 'http://localhost:3000/api/salud_usuario';
  private apiUrlHistorial = 'http://localhost:3000/api/historial_clinico';
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
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

}