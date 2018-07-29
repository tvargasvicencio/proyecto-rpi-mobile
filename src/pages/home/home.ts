import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temperaturaHumedad: any;

  constructor(public navCtrl: NavController,
              public restProvider: RestProvider) {
                this.getTemperaturaHumedad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoInventarioPage');
    this.getTemperaturaHumedad();
  }

  
  getTemperaturaHumedad() {
    this.restProvider.getTemperaturaHumedad()
    .then(data => {
      this.temperaturaHumedad = Array.of(data);
    });
  }
}
