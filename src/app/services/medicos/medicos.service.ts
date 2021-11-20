import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private API_SERVER = "http://localhost:8080/medico/";

  constructor(private httpClient: HttpClient) { }



  public getAllMedicos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveMedico (medico:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,medico);
  }

  public deleteMedico(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

}

