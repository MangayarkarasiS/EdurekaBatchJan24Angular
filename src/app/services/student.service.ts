import { Injectable } from '@angular/core';
import { Student } from '../student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  allStudents:Student[]=[{
    id:101,
    studentName:'Banu Roy',
    studTotalMarks:100,
    studentDOB:new Date(2023,5,5),
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
  getAllStudents():Student[]{
    return this.allStudents;
  }
}
