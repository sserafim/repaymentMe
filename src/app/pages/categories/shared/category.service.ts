import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) {

   }



  ngOnInit() {
  }

  create(category) {
    return this.db.list('/categories').push(category);
  }

  getAll() {
    return this.db.list('/categories').snapshotChanges()
            .pipe(
              map(changes => {
                   return changes.map(cat => ({key: cat.payload.key, ...cat.payload.val() }));
              }));
  }

  get(categoryId) {
    return this.db.object('/categories/' + categoryId);
  }

  update(categoryId, category) {
    return this.db.object('/categories/' + categoryId).update(category);
  }

  delete(categoryId) {
    return this.db.object('/categories/' + categoryId).remove();
  }


}
