import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl:'./display.component.html',
  styleUrls: ['./display.component.css']
})
//one-way data binding
export class DisplayComponent implements OnInit {
  BookName :string="Rich dad poor dad";
  imagePath:string="/assets/workout.webp";

  constructor() { }

  ngOnInit(): void {
    
  }
  ChangeBook(){
  this.BookName="Success Stories";
  }

}
