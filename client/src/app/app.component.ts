import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavComponent],
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'App';
  users: any;

  ngOnInit(): void {
    this.http.get('http://localhost:5002/api/users').subscribe({
      next: (response) => (this.users = response),
      error: (err) => console.error(err),
      complete: () => console.log('complete'),
    });
  }
}
