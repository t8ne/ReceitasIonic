import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  // Function to check if the side menu should be enabled
  isMenuEnabled(): boolean {
    // Check if the current route is one where the side menu should be enabled
    return this.router.url.includes('/tab1') || this.router.url.includes('/tab2');
  }
}

