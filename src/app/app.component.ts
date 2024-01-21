import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title:string = 'AngularEduJan2024';
  showLifeCycle:Boolean=false;
  onShowOrHide(){
    this.showLifeCycle=!this.showLifeCycle;
  }
}
