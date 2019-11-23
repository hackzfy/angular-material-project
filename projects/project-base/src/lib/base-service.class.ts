import { Base } from './base.class';
import { Injector } from '@angular/core';

export abstract class BaseService extends Base {
  constructor(protected injector: Injector) {
    super(injector);
  }
}
