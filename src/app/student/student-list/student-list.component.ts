import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  
  allStudents:Student[]=[{
    id:101,
    studentName:'Banu Roy',
    studTotalMarks:100,
    studentDOB:new Date(5,5,2023),
    studGender:'Male'
  },
  {
    id:102,
    studentName:'shiny',
    studTotalMarks:60,
    studentDOB:new Date(2,5,2023),
    studGender:'Female'
  },
  {
    id:103,
    studentName:'Roy',
    studTotalMarks:70,
    studentDOB:new Date(7,5,2023),
    studGender:'Male'
  }];
  constructor() { }

  ngOnInit(): void {
  }
  getMarkColor(mark:number){
    if(mark>90)
    return 'green';
  else if(mark<90 && mark>69)
  return 'blue';
else
return 'red';
  }

}
