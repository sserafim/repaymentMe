import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Entrie } from './entrie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrieService {

  constructor(private db: AngularFireDatabase) {}

  create(entrie) {
    return this.db.list('/entries').push(entrie);
  }

  getAll() {
    return this.db.list('/entries').snapshotChanges()
            .pipe(
              map(changes => {
                   return changes.map(ent => ({key: ent.payload.key, ...ent.payload.val() }));
              }));
  }

  // tslint:disable-next-line:member-ordering
  getAllx() {
    const entriesLanc: Entrie[] = [];
    return this.db.list('/entries').snapshotChanges()
            .pipe(
              map(changes => {
                   return changes.map(ent => ({key: ent.payload.key, ...ent.payload.val() })).forEach(element => {
                    const xx = Object.assign(new Entrie(), element);
                    entriesLanc.push(xx);
                   });
              }));
              return entriesLanc;
  }


  get(entrieId) {
    return this.db.object('/entries/' + entrieId);
  }


  update(entrieId, entrie) {
    return this.db.object('/entries/' + entrieId).update(entrie);
  }

  delete(entrieId) {
    return this.db.object('/entries/' + entrieId).remove();
  }
}
