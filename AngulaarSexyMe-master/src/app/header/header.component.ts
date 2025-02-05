import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { user } from '../userLocation/types/user.type';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive], templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // private accountService = inject(AccountService)
  private router = inject(Router)
  _user = signal<user | undefined>(undefined)  //Or
  // _user = computed(() => this.accoutService.data()?.user)

  logOut() {

  }
}
