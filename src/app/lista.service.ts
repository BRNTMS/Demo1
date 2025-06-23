import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { iPersona } from './persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  lista = ["1", "2", "3", "4"];
  protected readonly http = inject(HttpClient);
  constructor() { }

  getLista(): Observable<iPersona[]>{
    return this.http.get<iPersona[]>("http://localhost:8080/api/persone");
  }

  salvaPersona(persona: iPersona): Observable<iPersona> {
    return this.http.post<iPersona>("http://localhost:8080/api/persona", persona);
  }
}
