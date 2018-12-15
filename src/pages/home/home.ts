import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temperaturaHumedad: any;

  constructor(public navCtrl: NavController,
              public restProvider: RestProvider,
              public toastCtrl: ToastController) {
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

  actualizarDatos(position: string = "bottom") {
    this.getTemperaturaHumedad();
    let toast = this.toastCtrl.create({
      message: 'Datos actualizar. Intentos: '+this.temperaturaHumedad[0].intentos,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  encenderLed(ledPin){
    this.restProvider.encenderLed(ledPin);
  }

  apagarLed(ledPin){
    this.restProvider.apagarLed(ledPin);
  }

  toggleLuces(e){
    if (e.value==true) {
      this.encenderLed(40);
    }
    else{
      this.apagarLed(40);
    }
  }

}
