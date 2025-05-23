import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service'


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
  standalone: false,
})
export class AddStudentPage {
  studentName = '';

  constructor(private studentService: StudentService, private router: Router) { }

  addStudent() {
    this.studentService.addStudent(this.studentName);
    this.router.navigate(['/attendance']);
  }
}
