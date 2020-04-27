import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import {BLE} from "@ionic-native/ble/ngx";
import {DeviceAvailableComponent} from "./components/device-available/device-available.component";

@NgModule({
  declarations: [AppComponent, DeviceAvailableComponent],
  entryComponents: [DeviceAvailableComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
