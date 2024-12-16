import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-keynote',
  templateUrl: './add-keynote.component.html',
  styleUrls: ['./add-keynote.component.css'],
})
export class AddKeynoteComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  position: string = '';

  constructor(private http: HttpClient) {}

  addKeynote(): void {
    const keynote = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      position: this.position,
    };

    this.http.post('http://localhost:8081/keynotes', keynote).subscribe(
      (response) => {
        alert('Keynote added successfully!');
      },
      (error) => {
        alert('Failed to add keynote!');
      }
    );
  }
}
