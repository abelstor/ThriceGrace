import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: Infopagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    //console.log('Servicio de infopagina listo');

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: Infopagina) => {

      this.cargada = true;
      this.info = resp;

      console.log(resp);

    });



   }
}
