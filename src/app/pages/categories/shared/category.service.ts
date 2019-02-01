import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService {

  constructor(protected db: AngularFireDatabase) {
     super('categories', db);
   }

}
