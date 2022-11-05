import { Plants } from './plants';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }
  getPlants(): Observable<Plants[]> {
    return this.http.get<Plants[]>(this.apiUrl);
  }
}
