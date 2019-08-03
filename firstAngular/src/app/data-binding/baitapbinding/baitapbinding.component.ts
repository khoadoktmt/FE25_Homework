import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitapbinding',
  templateUrl: './baitapbinding.component.html',
  styleUrls: ['./baitapbinding.component.scss']
})
export class BaitapbindingComponent implements OnInit {

  email:string = "";
  fullname:string = "";

  namedisplay(value) {
    this.fullname = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
