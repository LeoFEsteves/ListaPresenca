import { Component, OnInit } from '@angular/core';

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
    this.studentService.AddStudent(this.studentName);
    this.router.navigate(['/attendance']);
  }
}
