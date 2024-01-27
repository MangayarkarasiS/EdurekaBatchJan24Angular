import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-animations',
  templateUrl: './todo-animations.component.html',
  styleUrls: ['./todo-animations.component.css'],
  animations:[
    trigger('myFade',[
      transition('void=>*',[
        style({backgroundColor:'yellow',opacity:0}),
        animate(2000,style({backgroundColor:'transparent',opacity:1,transform:'translateX(20px)'}))
      ]),
      transition('*=>void',[
        style({backgroundColor:'transparent',opacity:0}),
        animate(2000,style({backgroundColor:'pink',opacity:1,transform:'translateX(-20px)'}))
      ])
    ])
  ]
})
export class TodoAnimationsComponent implements OnInit {
  allTodo:string[]=["Fill Petrol","Purchase Grocery","Book ticket"];
  todoItem:string='';

  constructor() { }

  ngOnInit(): void {
  }
  addTodoItem(){
    this.allTodo.push(this.todoItem);
    this.todoItem="";
  }
  removeTodo(todo:string){
  this.allTodo.splice(this.allTodo.indexOf(todo),1);
  }
}
