import { Injectable } from '@angular/core';
import {BLE} from "@ionic-native/ble/ngx";

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  constructor(private ble: BLE) {
    console.log('bluetooth service on')
  }

  scanDevices(){

    this.ble.startScan([]).subscribe(device => {
      console.log(JSON.stringify(device));
    });

    setTimeout(() => {
      this.ble.stopScan().then(() => { console.log('scan stopped'); });
    }, 5000);
  }

  connect(deviceId: string){
    this.ble.connect(deviceId).subscribe(peripheralData => {
          console.log(peripheralData);
        },
        peripheralData => {
          console.log('disconnected');
        });
  }

  async disconnect(deviceId: string){
    await this.ble.disconnect(deviceId)
  }

  isConnected(deviceId: string){ //TODO
    this.ble.isConnected(deviceId).then(
        () => { console.log('connected'); },
        () => { console.log('not connected'); }
    );
  }

  async isEnabled(){
    await this.ble.isEnabled();
  }
}
