import { BehaviorSubject } from 'rxjs';

export interface IDictionaryStore {
  [key: string]: BehaviorSubject<DicItem[]>;
}

export interface DicItem {
  label: string;
  value: any;

  [key: string]: any;
}
