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

  makePromise(url){
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve((data));
      }, err => {
        console.log("ERROOOOR");
        console.log(err.message);
      });
    });
  }

  getTemperaturaHumedad(){
    return this.makePromise('http://192.168.1.10/sensores/temperatura-humedad');
  }

  encenderLed(ledPin){
    return this.makePromise('http://192.168.1.10/sensores/encender_led/'+ledPin);
  }

  apagarLed(ledPin){
    return this.makePromise('http://192.168.1.10/sensores/apagar_led/'+ledPin);
  }

}
