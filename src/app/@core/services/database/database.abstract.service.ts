import { Observable } from 'rxjs';

export abstract class DataBaseAbstractService<T> {
  abstract getAll(): Observable<T[]>;
  abstract getSingle(id: string): Observable<T>;
  abstract insert(item: T): Observable<T>;
  abstract update(item: T): Observable<T>;
  abstract remove(id: string): Observable<boolean>;
  abstract search(params: any): Observable<T[]>;
}
