import { BehaviorSubject } from 'rxjs';

export interface IDictionaryStore<T> {
  [key: string]: BehaviorSubject<T[]>;
}

export interface DicItem {
  label: string;
  value: any;

  [key: string]: any;
}
