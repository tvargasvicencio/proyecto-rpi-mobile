import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:8100/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getTemperaturaHumedad(){
    return new Promise(resolve => {
      this.http.get('http://201.186.52.47/sensores/temperatura-humedad').subscribe(data => {
        resolve((data));
      }, err => {
        console.log("ERROOOOR");
        console.log(err.message);
      });
    });
  }

}
