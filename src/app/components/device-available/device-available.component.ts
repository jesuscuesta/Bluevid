import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {BluetoothService} from "../../services/bluetooth.service";

@Component({
  selector: 'app-device-available',
  templateUrl: './device-available.component.html',
  styleUrls: ['./device-available.component.scss'],
})
export class DeviceAvailableComponent implements OnInit {

  constructor(public modalController: ModalController, private blue: BluetoothService) {
    console.log(blue.devices);
  }

  ngOnInit() {}

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  conectar(deviceId) {
    console.log('conectando..');
    this.blue.connect(deviceId);
  }
}
