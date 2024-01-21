import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

//two-way data binding
export class CounterComponent implements OnInit {
 counter:number=0; 

  constructor() { }

  ngOnInit(): void {
  }
  incrementCounter(){
    this.counter++;
  }
  decrementCounter(){
    this.counter--;
  }
}
