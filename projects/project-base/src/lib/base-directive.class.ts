import {Base} from './base.class';
import {Injector} from '@angular/core';

/**
 * Directive, component(not page component) should extend this class.
 */
export abstract class BaseDirective extends Base {
  protected constructor(protected injector: Injector) {
    super(injector);
  }
}
