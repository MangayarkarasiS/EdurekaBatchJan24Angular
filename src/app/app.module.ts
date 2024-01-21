import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
