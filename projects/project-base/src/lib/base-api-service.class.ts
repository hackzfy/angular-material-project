import { BaseService } from './base-service.class';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Service uses httpClient should extend this class.
 */
export abstract class BaseApiService extends BaseService {
  protected http: HttpClient;
  constructor(protected injector: Injector) {
    super(injector);
    this.http = injector.get(HttpClient);
  }
}
