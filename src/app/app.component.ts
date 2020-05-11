import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';

  showLoadingIndicator = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.showLoadingIndicator = false;
        }, 2500);
      }
    });
  }

}
