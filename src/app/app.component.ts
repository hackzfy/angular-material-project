import { Component, Injector } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BaseComponent } from '@base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'material-shared-project';

  showLink = true;

  constructor(protected injector: Injector, private router: Router) {
    super(injector);
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(
      (e: NavigationEnd) => this.showLink = e.url === '/'
    )
  }
}
