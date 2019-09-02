import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

  constructor() { }
  name : string="Ajay";
  ngOnInit() {
  }

  IamCalledFromChild(value : string)
  {
    console.log(value);
  }
  IamCalledFromChild2(value : string)
  {
    alert("I am back");
    
    alert(value);
    console.log(value);
  }


}
