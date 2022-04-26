import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SPeliculasService {
peliculas:Observable<Pelicula[]>=new Observable();
  constructor(private clienteHttp: HttpClient) { 

  }
  getPeliculas(): Observable<Pelicula[]> {
    console.log("Obteniendo peliculas de la base de datos");
    this.peliculas = this.clienteHttp.get<Pelicula[]>("http://localhost:8080/peliculas")
    return this.peliculas;

  }
}
