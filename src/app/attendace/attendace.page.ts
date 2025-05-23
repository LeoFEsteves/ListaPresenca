import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { StudentService } from '../services/student.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-attendace',
  templateUrl: './attendace.page.html',
  styleUrls: ['./attendace.page.scss'],
  standalone: false,
  providers: [DatePipe]
})
export class AttendacePage {

  date: string = '';

  presentStudents : String [] = [];
  students: String[] = [];
  studentName = '';

  constructor(private studentService: StudentService, private route: Router, private datePipe: DatePipe ) {
    this.date = this.getCurrentDateTime();
  }

  getCurrentDateTime(): any {
    const currentDate = new Date();
    return this.datePipe.transform(currentDate, 'dd/MM/yyyy HH:mm')
  }

  ionViewWillEnter() {
    this.students = this.studentService.getStudents();
    this.presentStudents = this.studentService.getAttendance(this.date);
  }

  markAttendance(student: any) {
    this.studentService.markAttendance(this.date, student);
    this.presentStudents = this.studentService.getAttendance(this.date);
  }

  addStudent() {
    this.studentService.addStudent(this.studentName);
    this.route.navigate(['/attendance']);
  }

  clearInput() {
    this.studentName = '';
  }
}
