import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent implements OnInit, AfterViewInit {

  @Input() progress: number = 0;
  rotate: number;
  colors: any = { low: '#00C851', mid: '#FFBB33', midHigh: '#FF8800', high: '#FF4444', critical: '#CC0000' };
  riskText: string = 'low';
  color: string = this.colors.low;
  shadow: string;
  animate: boolean = false;
  alert: string = 'out';
  count: boolean = false;

  constructor() { }

  ngOnInit() {
    this.rotate = ((100 - this.progress) / 100) * Math.PI * (70 * 2);
    setTimeout(() => this.animate = true, 100);
    interval(3000).subscribe(() => {
      let random = Math.floor(Math.random() * 101);
      this.change(random);
    });
  }

  public change(risk) {
    setTimeout(() => {
      console.log(risk);
      this.progress = risk;
      this.rotate = ((100-risk)/100)*Math.PI*(70*2);
      if (risk <= 40) {
        this.riskText = 'bajo';
        this.color = this.colors.low;
        this.shadow = `0 0 12px ${this.colors.low}`;
        this.alert = 'out';
      } else if (risk > 40 && this.progress <= 60) {
        this.riskText = 'medio';
        this.color = this.colors.mid;
        this.shadow = `0 0 12px ${this.colors.mid}`;
        this.alert = 'out';
      } else if (risk > 60 && this.progress <= 80) {
        this.riskText = 'medio';
        this.color = this.colors.midHigh;
        this.shadow = `0 0 12px ${this.colors.midHigh}`;
        this.alert = 'out';
      } else if (risk > 80 && this.progress <= 95) {
        this.riskText = 'alto';
        this.color = this.colors.high;
        this.shadow = `0 0 12px ${this.colors.high}`;
        this.alert = 'in';
        this.count = true;
      } else if (risk > 95 && this.progress <= 100) {
        this.riskText = 'crítico';
        this.color = this.colors.critical;
        this.shadow = `0 0 12px ${this.colors.critical}`;
        this.alert = 'in';
        this.count = true;
      }
    }, 200);
  }

  ngAfterViewInit() {

  }

}
