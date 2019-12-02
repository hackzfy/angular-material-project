import { Injector } from '@angular/core';
import { BaseModuleService } from './base-module-service.class';

/**
 * services that are used to serve a page component should extend this class.
 */
export abstract class BasePageService extends BaseModuleService {
  protected constructor(protected injector: Injector) {
    super(injector);
  }

}


