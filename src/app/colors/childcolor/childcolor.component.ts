import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-childcolor',
  templateUrl: './childcolor.component.html',
  styleUrls: ['./childcolor.component.css']
})
export class ChildcolorComponent implements OnInit {
 @Input() printColor:string="";
 @Output() deleteEventEmitter=new EventEmitter();
  
 movieName="abcd";
  constructor() { }

  ngOnInit(): void {
  }
  deleteColor(printColor:string){
     this.deleteEventEmitter.emit(printColor);
  }
}
