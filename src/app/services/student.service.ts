import { Injectable, input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: string[] = [];
  private attendance: { [date: string]: string[] } = {};

  constructor() { }

  getStudents(): string[] {
    return this.students;
  }

  addStudent(name: string): void {
    if(this.students.includes(name)){
      window.alert("Repeated Name")
    }
    else
    {
      this.students.push(name);
    }
  }
  markAttendance(date: string, student: string): void {
    if (!this.attendance[date]) {
      this.attendance[date] = [];
    }
    if(this.attendance[date].includes(student))
      {
       window.alert("This student is already present")
      }
    else{
    this.attendance[date].push(student);
    }
  }

  getAttendance(date: string): string[] {
    return this.attendance[date] || [];
  }}
