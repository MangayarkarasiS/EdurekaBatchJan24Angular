import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filterData:string='';
  allStudents:Student[]=[];
  /*allStudents:Student[]=[{
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
  }];*/
   
  
  constructor(private studentService:StudentService) {
   // this.studentService=new StudentService();
   }

  ngOnInit(): void {
    this.allStudents=this.studentService.getAllStudents();
  }



  getMarkColor(mark:number){
    if(mark>90)
    return 'green';
  else if(mark<90 && mark>69)
  return 'blue';
else
return 'red';
  }
  addTestStudent()
  {
    let  newStudent:Student={
      id:0,
    studentName:'Angel',
    studTotalMarks:70,
    studentDOB:new Date(7,5,2023),
    studGender:'Female'
    }
    this.allStudents.push(newStudent);
  }

}
