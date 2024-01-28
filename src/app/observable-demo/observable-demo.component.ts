import { Component, OnInit } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
 
  /*myObservable:Observable<string>=new Observable((observer)=>{
    console.log("streaming emitted started");
    observer.next("A");
    observer.next("B");
    observer.next("C");
    observer.next("D");
    observer.next("E");
    observer.next("F");
    observer.complete();

  });*/
  allColors:string[]=["RED","BLUE","GREEN","ORANGE","BROWN"];
//myObservable:Observable<any>=of(2,"Hello",true,10);
 //myObservable:Observable<string>=from(this.allColors);
 myObservable:Observable<string>=from(this.allColors).pipe<string>(map((eachColor)=>eachColor.toLowerCase()));
  constructor() { }

  ngOnInit(): void {
  }
  StartSubscription(){
    this.myObservable.subscribe({
      next:(val)=>{
          console.log(val);
      },
      error:(err)=>{
        console.log(err.message);
      },
      complete:()=>{
        console.log("streming emitting completed ");
      }
    })
  }


}
