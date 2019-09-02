import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() data;
  @Output() onClick = new EventEmitter();
  @Output() OnClick2 = new EventEmitter<string>();
   
  onClick2(value : string) : void
  {
    alert(value);
    this.OnClick2.emit(value.toUpperCase());
  }


  constructor() { }

  ngOnInit() {
  }

}
