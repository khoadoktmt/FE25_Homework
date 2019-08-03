import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.scss']
})
export class OnewaybindingComponent implements OnInit {

  name:string = "CyberSoft";
  
  eventBinding(param) {
    // display whatever you want here
    console.log(param);
    
  }
  
  constructor() { }

  ngOnInit() { }

}
