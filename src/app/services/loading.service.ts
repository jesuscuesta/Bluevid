import { Injectable } from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private ldController: LoadingController) { }

  async create(): Promise<any>{
    const loading = await this.ldController.create({
      message: 'Espere...',
    });
    return loading;
  }


}
