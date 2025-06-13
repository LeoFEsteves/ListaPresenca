import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: string[] = [];
  private attendance: { [date: string]: string[] } = {};

  constructor(private alertController: AlertController) { }

  getStudents(): string[] {
    return this.students;
  }

  async addStudent(name: string): Promise<void> {
    if (this.students.includes(name)) {
      await this.presentAlert("Repeated Name", "This student is already in the list.");
    } else if (!name || name.trim() === "") {
      await this.presentAlert("Empty Name", "Please enter a valid name.");
    } else {
      this.students.push(name);
    }
  }

  async markAttendance(date: string, student: string): Promise<void> {
    if (!this.attendance[date]) {
      this.attendance[date] = [];
    }
    if (this.attendance[date].includes(student)) {
      await this.presentAlert("Already Marked", "This student is already present.");
    } else {
      this.attendance[date].push(student);
    }
  }

  getAttendance(date: string): string[] {
    return this.attendance[date] || [];
  }


  private async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons:   [
        {
        text: 'OK',
        role: 'cancel',
        cssClass: 'ok-button'
        }
      ]
    });
    await alert.present();
  }
}
