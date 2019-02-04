import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';



export abstract class BaseResourceService {

    constructor(protected uriFirebase: string, protected db: AngularFireDatabase) {
    }

    create(resource) {
        return this.db.list(`/${this.uriFirebase}`).push(resource);
      }

    getAll() {
        return this.db.list(`/${this.uriFirebase}`).snapshotChanges()
                .pipe(
                  map(changes => {
                       return changes.map(cat => ({key: cat.payload.key, ...cat.payload.val() }));
                  }));
      }

      getAllX(resource): any {
        const fetchRecord: any[] = [];
        return this.db.list(`/${this.uriFirebase}`).snapshotChanges()
                .pipe(
                  map(changes => {
                       return changes.map(cat => ({key: cat.payload.key, ...cat.payload.val() }));
                  })).subscribe(x => {
                    x.forEach(element => {
                         const y = Object.assign(new resource(), element);
                         fetchRecord.push(y);
                    });
                    return fetchRecord;
                  });
      }

      get(id) {
        return this.db.object(`/${this.uriFirebase}/${id}`);
      }

      update(id, resource) {
        return this.db.object(`/${this.uriFirebase}/${id}`).update(resource);
      }

      delete(id) {
        return this.db.object(`/${this.uriFirebase}/${id}`).remove();
      }

}
