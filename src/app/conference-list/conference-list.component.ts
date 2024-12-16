import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css'],
})
export class ConferenceListComponent implements OnInit {
  conferences: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadConferences();
  }

  loadConferences(): void {
    this.http
      .get<any[]>('http://localhost:8083/conferences')
      .subscribe((data) => {
        this.conferences = data;
      });
  }

  deleteConference(conferenceId: any): void {
    this.http
      .delete(`http://localhost:8083/conferences/${conferenceId}`)
      .subscribe(
        (response) => {
          alert('Conference deleted successfully!');
          this.loadConferences();
        },
        (error) => {
          alert('Failed to delete conference!');
        }
      );
  }
}
