import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfopaginaService {

  info: Infopagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

   }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: Infopagina) => {

      this.cargada = true;
      this.info = resp;

    });
  }

  private cargarEquipo(){

    // leer archivo json

    this.http.get('https://thricegrace-1ac63.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);

    });
      // this.equipo = resp
  }
}

