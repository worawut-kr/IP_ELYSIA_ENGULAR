import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  private _http = inject(HttpClient);

  constructor() {
    const apiUrl = environment.baseUrl + '/api/user/all';
    this._http.get<fake_user[]>(apiUrl).subscribe({
      next: (users) => {
        console.log(users);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}

type fake_user = {
  id: string;
  username: string;
  display_name: string;
  age: string;
};
