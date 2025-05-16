import { AddStudentPage } from './../add-student/add-student.page';
import { Injectable, input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: string[] = [];
  private attendace: { [date: string]: string[] } = {};

  constructor() { }

  getStudents(): string[] {
    return this.students;
  }

  addStudent(name: string): void {
    this.students.push(name);
  }

  markAttendance(date: string, student: string): void {
    if (!this.attendace[date]) {
      this.attendace[date] = [];
    }
    this.attendace[date].push(student);
  }

  getAttendance(date: string): string[] {
    return this.attendace[date] || [];
  }}
