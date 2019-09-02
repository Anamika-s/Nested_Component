import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  constructor() { }
 name : string ="Deepak Kumar";
  ngOnInit() {
  }
  
  IAmInParent(value : string)
  {
    console.log("Im in parent " + value);
  }

}
