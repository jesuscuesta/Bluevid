import { Component } from '@angular/core';
import {BluetoothService} from "../services/bluetooth.service";
import {AlertController, ModalController} from '@ionic/angular';
import {DeviceAvailableComponent} from "../components/device-available/device-available.component";
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bluvid: boolean;
  _loading: any;

  constructor(private blue: BluetoothService,
              private alertController: AlertController,
              private modalController: ModalController,
              private loading: LoadingService) {}

  async enableBluetooth(){
    this._loading = await this.loading.create()
    console.log(this.bluvid)

    if(this.bluvid){
      this.blue.isEnabled().then(async () => {
        await this._loading.present();
        this.blue.scanDevices().then(async()=> {
          await this._loading.dismiss();
          await this.showModalDevicesAvailable();
        }).catch(error => console.error(error))

      }).catch(async error => {
        console.log(error)
        await this.sendAlert();
        this.bluvid = false;
      });
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
