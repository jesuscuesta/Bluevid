import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-device-available',
  templateUrl: './device-available.component.html',
  styleUrls: ['./device-available.component.scss'],
})
export class DeviceAvailableComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
