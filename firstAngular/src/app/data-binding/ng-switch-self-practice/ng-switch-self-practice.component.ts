import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-self-practice',
  templateUrl: './ng-switch-self-practice.component.html',
  styleUrls: ['./ng-switch-self-practice.component.scss']
})
export class NgSwitchSelfPracticeComponent implements OnInit {

  switchCondition: string = '';

  constructor() { }

  ngOnInit() { }

  colorChange(colorValue) {
    // this.switchCondition = colorValue;

    switch (colorValue) {
      case ("red"):
        this.switchCondition = colorValue;
        break;

      case ("green"):
        this.switchCondition = colorValue;
        break;

      case ("blue"):
        this.switchCondition = colorValue;
        break;

      default:
        this.switchCondition = "red";
    }
  }
}
