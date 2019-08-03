import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.scss']
})

// Model here ???

export class TwowaybindingComponent implements OnInit {
  // when data in .ts file changed,
  // correspond data in .html file changed as well
  
  name:string = "CyberSoft";

  // console.log(name); // missing function implementation

  constructor() { }

  ngOnInit() {
  }

}
