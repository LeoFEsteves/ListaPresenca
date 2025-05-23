import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: false,
})
export class StudentsPage {
  students: String[] = [];
  constructor(private studentService: StudentService) { }

  ionViewMillEnter() {
    this.students = this.studentService.getStudents()
  }
}
