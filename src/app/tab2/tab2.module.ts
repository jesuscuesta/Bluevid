import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../components/components.module';
import { IndicatorComponent } from './indicator/indicator.component';
import { RiskAlertComponent } from './risk-alert/risk-alert.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    ComponentsModule
  ],
  declarations: [Tab2Page, IndicatorComponent, RiskAlertComponent]
})
export class Tab2PageModule {}
