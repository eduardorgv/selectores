import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //private _baseUrl: string = 'https://restcountries.com/v3.1';
  private _apiKey: string = '0ba36fb4c45545c066aac9a8fca3af17';
  private _baseUrl: string = 'http://api.countrylayer.com/v2';
  private _regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones() {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    return this.http.get<PaisSmall[]>(`${this._baseUrl}/region/${region}?access_key=${this._apiKey}`);
  }

}
