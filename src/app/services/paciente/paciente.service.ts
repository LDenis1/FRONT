import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private API_SERVER = "http://localhost:8080/paciente/";

  constructor(private httpClient: HttpClient) { }



  public getAllPacientes(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public savePaciente (paciente:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,paciente);
  }

  public deletePaciente(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }
}
