import { Component } from '@angular/core';

import { AuthService } from './auth.service';
1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private _authService: AuthService) {}
}
