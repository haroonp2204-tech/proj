import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../utitlities/person-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'assets/data.json';

  constructor(private http: HttpClient) {}
  
  getData(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}
