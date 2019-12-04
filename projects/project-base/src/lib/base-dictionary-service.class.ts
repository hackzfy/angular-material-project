import {BaseApiService} from '@base';
import {DicItem, IDictionaryStore} from './base.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import * as _ from 'lodash';

export abstract class BaseDictionaryService<T extends DicItem = DicItem> extends BaseApiService {
  abstract dicUrl: string;

  abstract store: IDictionaryStore<T>;

  abstract requestData(type: string): Observable<any[]>;

  abstract transform(items: any[]): T[];

  getValue(type: string, label: string): Observable<string> {
    return this.getDic(type).pipe(
      map(items => items.find(item => item.label && item.label.toString() === label)),
      map(item => item.value)
    );
  }

  getLabel(type: string, value: any): Observable<string> {
    return this.getDic(type).pipe(
      map(items => items.find(item => _.isEqual(item.value, value))),
      map(item => item.label)
    );
  }

  getDic(type: string): Observable<T[]> {
    if (this.store[type] == null) {
      this.store[type] = new BehaviorSubject<T[]>([]);
      this.requestData(type).pipe(
        map(resp => this.transform(resp)),
        tap(
          resp => this.store[type].next(resp),
          () => (this.store[type] = null)
        )
      );
    }

    return this.store[type].pipe(filter(items => Array.isArray(items) && items.length > 0));
  }
}
