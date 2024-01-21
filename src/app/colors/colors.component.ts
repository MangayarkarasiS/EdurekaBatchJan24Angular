import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
//arrays and ngFor, ngIF
export class ColorsComponent implements OnInit {
  
  allColors:string[]=["Red","Blue","Green"];
  toggleEdit:boolean=false;
  changeColor:string='';
  constructor() { }

  ngOnInit(): void {
  }
  removeColor(color:string){
    console.log(color);
    this.allColors.splice(this.allColors.indexOf(color),1);
  }
  editColor(i:number,color:string){
    alert("inside edit");
    if(this.toggleEdit){
      this.allColors[i]=this.changeColor;
    }
    this.toggleEdit=!this.toggleEdit;
  }
  
}
