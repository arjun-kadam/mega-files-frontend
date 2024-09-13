import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'megaFiles';

  isHomeRoute = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.router.url === '/')
  );

  constructor(private router: Router) {}
  
}
