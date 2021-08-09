import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

import { DataBaseAbstractService } from './database.abstract.service';
import { IProduct } from '@shared/schemas/product';

@Injectable()
export class ProductService implements DataBaseAbstractService<IProduct> {
  TABLE = 'products';

  constructor(private afs: AngularFirestore) {}

  getAll(): Observable<IProduct[]> {
    //return this.productsCollection.valueChanges(); <== This return without id

    const colletion = this.afs
      .collection<IProduct>(`${this.TABLE}`)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          return snapshot.map((item) => {
            const listData = item.payload.doc.data();
            const dateCustom = (<any>listData.createdAt) as Timestamp;
            listData.id = item.payload.doc.id;
            listData.createdAt = dateCustom.toDate();

            return listData;
          });
        }),
        catchError(() => {
          throw new Error('error in process');
        })
      );
    return colletion;
  }

  getSingle(id: string): Observable<IProduct> {
    const document = this.afs
      .doc<IProduct>(`${this.TABLE}/${id}`)
      .snapshotChanges()
      .pipe(
        switchMap((docSnapShot) => {
          if (!docSnapShot.payload.exists) {
            throw new Error('document not found');
          }
          return of(docSnapShot.payload.data());
        }),
        catchError((error) => {
          throw new Error(error);
        })
      );

    return document;
  }

  insert(item: IProduct): Observable<IProduct> {
    const id = this.afs.createId();
    const itemNew = { ...item, id: id };

    const req = this.afs.collection<IProduct>(`${this.TABLE}`).add(itemNew);
    from(req).subscribe();

    return of(itemNew);
  }

  update(item: IProduct): Observable<IProduct> {
    const req = this.afs.collection<IProduct>(`${this.TABLE}`).doc(item.id).update(item);
    from(req).subscribe();

    return of(item);
  }

  remove(id: string): Observable<boolean> {
    const req = this.afs.collection<IProduct>(`${this.TABLE}`).doc(id).delete();
    from(req).subscribe();

    return of(true);
  }

  search(params: string): Observable<IProduct[]> {
    return this.afs
      .collection<IProduct>(`${this.TABLE}`, (ref) =>
        ref
          .orderBy('name')
          .startAt(params)
          .endAt(params + '\uf8ff')
      )
      .valueChanges();
  }
}
