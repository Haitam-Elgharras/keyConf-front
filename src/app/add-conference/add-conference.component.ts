import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css'],
})
export class AddConferenceComponent {
  title: string = '';
  type: string = '';
  date: string = '';
  duration: number = 0;
  registeredParticipants: number = 0;
  keynotes: any[] = [];
  selectedKeynotes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // get keynotes
    this.http.get<any[]>('http://localhost:8081/keynotes').subscribe((data) => {
      this.keynotes = data;
    });
  }

  isSelected(keynoteId: any): boolean {
    return this.selectedKeynotes.includes(keynoteId);
  }

  toggleSelection(keynoteId: any): void {
    const index = this.selectedKeynotes.indexOf(keynoteId);
    if (index === -1) {
      this.selectedKeynotes.push(keynoteId);
    } else {
      this.selectedKeynotes.splice(index, 1);
    }
  }

  addConference(): void {
    const conference = {
      title: this.title,
      type: this.type.toUpperCase(),
      date: this.date,
      duration: this.duration,
      registeredParticipants: this.registeredParticipants,
      keynoteIds: this.selectedKeynotes,
    };

    this.http.post('http://localhost:8083/conferences', conference).subscribe(
      (response) => {
        alert('Conference added successfully!');
      },
      (error) => {
        alert('Failed to add conference!');
      }
    );
  }
}
