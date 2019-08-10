import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-self-practice',
  templateUrl: './ng-class-self-practice.component.html',
  styleUrls: ['./ng-class-self-practice.component.scss']
})
export class NgClassSelfPracticeComponent implements OnInit {

  textcolor: boolean = true;
  redcolor: string = 'blue';

  constructor() { }

  ngOnInit() { }

  changeColor() {
    this.textcolor = !this.textcolor;
  }
}
