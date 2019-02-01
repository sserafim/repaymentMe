import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class EntrieService extends BaseResourceService {

  constructor(protected db: AngularFireDatabase) {
      super('entries' , db);
  }

}
