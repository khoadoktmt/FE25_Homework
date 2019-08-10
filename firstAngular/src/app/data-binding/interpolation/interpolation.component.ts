import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  
  usrname:string = "Username"
  name:string = "Paul";
  usrinput:string = "";

  

  constructor() { }

  ngOnInit() { }

}
