import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {
 allNumbers:number[]=[2,4,3,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}
