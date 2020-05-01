import { Component } from '@angular/core';
import {BluetoothService} from "../services/bluetooth.service";
import {BLE} from "@ionic-native/ble";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  constructor(blue: BluetoothService ) {}

}
