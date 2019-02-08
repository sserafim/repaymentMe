import { Subscription, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Entrie } from './entrie.model';
import { map } from 'rxjs/operators';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class EntrieService extends BaseResourceService {


  entriesObservable: Subscription;

  constructor(protected db: AngularFireDatabase) {
      super('entries' , db);
  }

  getByMonthAndYear(month: number, year: number): Observable<Entrie[]> {
      return this.getAllX().pipe(
        map(x => {
          return this.filterByMonthAndYear(x, month, year);
        })
      );
  }

  private filterByMonthAndYear(ent: Entrie[], month: number, year: number) {
      return ent.filter(entry => {
          const mes = +entry.data.substring(3, 5) === +month;
          const ano = +entry.data.substring(6) === +year;

          if (mes && ano ) {
            return entry;
          }

      });
  }

}
