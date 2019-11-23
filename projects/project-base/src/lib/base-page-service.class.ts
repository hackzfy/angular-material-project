import { BaseApiService } from './base-api-service.class';
import { Injector } from '@angular/core';

/**
 * services that are used to serve a page component should extend this class.
 */
export abstract class BasePageService extends BaseApiService {
  constructor(protected injector: Injector) {
    super(injector);
  }

}
