import { Injector } from '@angular/core';

import { Base } from './base.class';

export abstract class BaseComponent extends Base {
  protected constructor(protected injector: Injector) {
    super(injector);
  }
}
