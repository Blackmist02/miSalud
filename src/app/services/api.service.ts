import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // URL de la API

  constructor(private http: HttpClient) {}

  // Obtener lista de usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  // Crear un nuevo usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }
}

