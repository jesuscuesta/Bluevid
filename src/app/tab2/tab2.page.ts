import { Component } from '@angular/core';
import {BluetoothService} from "../services/bluetooth.service";
import {AlertController, ModalController} from '@ionic/angular';
import {DeviceAvailableComponent} from "../components/device-available/device-available.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bluvid: boolean;

  constructor(private blue: BluetoothService,
              public alertController: AlertController,
              public modalController: ModalController,) {}

  async enableBluetooth(){
    console.log(this.bluvid)

    if(this.bluvid){
      this.blue.isEnabled().then( () => {
        this.blue.scanDevices().then(()=> {
          this.showModalDevicesAvailable();
        }).catch(error => console.error(error))

      }).catch(async error => {
        console.log(error)
        await this.sendAlert();
        this.bluvid = false;
      });
      /*console.log(isEnableBluetooth);
      */


    }
  }

  async sendAlert() {
    const alert = await this.alertController.create({
      header: 'BlueVid',
      message: 'El bluetooth del telefono no esta activado.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showModalDevicesAvailable() {
    const modal = await this.modalController.create({
      component: DeviceAvailableComponent
    });
    return await modal.present();
  }

}
