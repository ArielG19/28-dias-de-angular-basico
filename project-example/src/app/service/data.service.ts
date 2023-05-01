import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { City } from '../model/city.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export interface City {
  _id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //providad de nuestra url
  private readonly API = environment.api;
  constructor(private readonly http: HttpClient) { }


  //metodos crud service

  addCityService(city: string): Observable<City>{
    //Propiedad body, contiene la data a modificar
    const body = {name:city}

    //pasamos nuestra url + la data
    return this.http.post<City>(this.API, body);
  }

  getCityService(): Observable<City[]>{
    //recuperarmos nuestro array
    return this.http.get<City[]>(this.API);
  }

  updateCityService(city: City): Observable<void>{
    const body = {name: city.name}
    //aqui pasamos nuestra url + id y como segundo parametro la data a modificar
    return this.http.put<void>(`${this.API}/${city._id}`,body);
  }

  deleteCityService(id: string): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
