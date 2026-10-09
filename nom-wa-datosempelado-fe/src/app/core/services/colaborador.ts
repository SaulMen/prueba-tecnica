import { ApiResponse, Colaborador } from '../models/colaborador';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  private http = inject(HttpClient);
  
  private readonly apiUrl = 'http://localhost:3000/api/v1/colaboradores';

  getColaboradores(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  crearColaborador(colaborador: Colaborador): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, colaborador);
  }

  actualizarColaborador(id: number, colaborador: Partial<Colaborador>): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, colaborador);
  }

  eliminarColaborador(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
