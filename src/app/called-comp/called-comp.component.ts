// 
import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'called-comp',
  templateUrl: './called-comp.component.html',
  styleUrls: ['./called-comp.component.css']
})
export class CalledCompComponent implements OnInit {

  @Input() data;
  @Output() onClick= new EventEmitter();
  @Output() OnClick2= new EventEmitter<string>();
  constructor() { }
  
  onClick2(value : string) : void
  {
    alert(value);
    this.OnClick2.emit(value.toUpperCase());
   // return value.toUpperCase();
  }

  ngOnInit() {
  }

}
