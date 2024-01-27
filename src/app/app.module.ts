import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ColorsComponent } from './colors/colors.component';
import { ChildcolorComponent } from './colors/childcolor/childcolor.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HoverHighlightDirective } from './custom-directive/hover-highlight.directive';
import { NumberListComponent } from './number-list/number-list.component';
import { ExpoPipe } from './custom-pipes/expo.pipe';
import { FilterListPipe } from './custom-pipes/filter-list.pipe';
import { TodoAnimationsComponent } from './todo-animations/todo-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CounterComponent,
    ColorsComponent,
    ChildcolorComponent,
    LifeCycleComponent,
    StudentListComponent,
    HoverHighlightDirective,
    NumberListComponent,
    ExpoPipe,
    FilterListPipe,
    TodoAnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
