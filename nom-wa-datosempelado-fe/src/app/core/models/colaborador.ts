export interface Colaborador {
  idcolaborador: number;
  nombre: string;
  apellido: string;
  direccion: string;
  edad: number;
  profesion: string;
  estado_civil: string;
}

export interface ApiResponse {
  ok: boolean;
  mensaje: string;
  data: Colaborador[]; 
}