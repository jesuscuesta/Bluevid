import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-risk-alert',
  templateUrl: './risk-alert.component.html',
  styleUrls: ['./risk-alert.component.scss'],
})
export class RiskAlertComponent implements OnInit {
  @Input() alert: string = 'out';

  constructor() { }

  ngOnInit() {
  }

}
