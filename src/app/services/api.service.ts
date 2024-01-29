import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  getSingleCharacter(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${id}`)
  }

}
