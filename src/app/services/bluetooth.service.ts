import { Injectable } from '@angular/core';
import {BLE} from "@ionic-native/ble/ngx";

@Injectable({
  providedIn: 'root'
})
export class BluetoothService {

  private _devices: any[] = [];

  constructor(private ble: BLE) {
    console.log('bluetooth service on')
  }

  scanDevices() : Promise<any>{

    return new Promise((resolve, reject) => {
      try{
        this.cleanDevices();
        this.ble.startScan([]).subscribe(device => {
          console.log(device);
          this._devices.push(device);
        });

        setTimeout(() => {
          this.ble.stopScan().then(() => { console.log('scan stopped'); resolve(); });
        }, 5000);

      }
      catch (e) {
        reject(e);
      }



    })


  }

  connect(deviceId: string): Promise<any>{
    return new Promise((resolve, reject) =>{
      this.ble.connect(deviceId)
            .subscribe(peripheralData => {
              console.log(peripheralData);
              resolve();
            },
            peripheralData => {
              console.log('disconnected');
              reject();
            });
    })

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

  isEnabled(): Promise<any>{
    return this.ble.isEnabled();
  }

  get devices(){
    return this._devices;
  }

  private cleanDevices(){
    this.devices.length = 0;
  }
}
