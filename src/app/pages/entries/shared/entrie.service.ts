import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Entrie } from './entrie.model';


@Injectable({
  providedIn: 'root'
})
export class EntrieService extends BaseResourceService {

  constructor(protected db: AngularFireDatabase) {
      super('entries' , db);
  }

  getByMonthAndYear(month: number, year: number) {
     console.log('passou aqui ' , this.getAllX(Entrie) );
  }

  private filterByMonthAndYear(entries: Entrie[], month: number, year: number) {
      console.log('passou aqui ' , entries);
  }

}
