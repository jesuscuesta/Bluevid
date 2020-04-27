import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {BluetoothService} from "../../services/bluetooth.service";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-device-available',
  templateUrl: './device-available.component.html',
  styleUrls: ['./device-available.component.scss'],
})
export class DeviceAvailableComponent implements OnInit {

  private _loading: any;
  private _isConnected : boolean = false;

  constructor(public modalController: ModalController,
              private blue: BluetoothService,
              private loading: LoadingService) {
    console.log(blue.devices);
  }

  ngOnInit() {

  }

  async closeModal() {
    await this.modalController.dismiss({});
  }

  async conectar(deviceId) {
    this._loading = await this.loading.create();
    await this._loading.present();
    this.blue.connect(deviceId).then(async () => {
      this._isConnected = true;
      await this._loading.dismiss();
    }).catch(async (error) => {
      await this._loading.dismiss();
      console.error('error');
    });
  }
}
