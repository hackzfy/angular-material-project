import { Base } from './base.class';
import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasePageService } from './base-page-service.class';

export abstract class BasePage extends Base {
  protected abstract pageService: BasePageService;
  protected route: ActivatedRoute;
  protected router: Router;

  constructor(protected injector: Injector) {
    super(injector);
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }

  /**
   * prevent we from injecting HttpClient into component.
   * All http requests should be placed in service.
   */
  protected http() {}

}
