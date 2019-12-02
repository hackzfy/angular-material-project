import { BaseApiService } from './base-api-service.class';
import { Injector } from '@angular/core';

export abstract class BaseModuleService extends BaseApiService {

  protected constructor(protected  injector: Injector) {
    super(injector);
  }
}
