import { Component} from '@angular/core';
import { Router } from 'angular/router';
import { StudentService } from '../services/student.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-attendace',
  templateUrl: './attendace.page.html',
  styleUrls: ['./attendace.page.scss'],
  standalone: false
})
export class AttendacePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
