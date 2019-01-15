import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  categoryCol: AngularFirestoreCollection<Category[]>;
  public category: AngularFireList<Category>;


  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) {
    // this.categoryCol = afs.collection<Category>('categories');
    this.category = db.list('/categories');
   }



  ngOnInit() {
  }

  addCategory(category: Category): void {
      this.category.push(category);
  }

/*
  save(category: Category): Promise<void> {
    return this.categoryCol.add(Object.assign({}, category)).then(objeto => {

        category.id = objeto.id;
        this.update(category);
    });
  }*/

  update(category: Category): Promise<void> {
    return this.categoryCol.doc(category.id)
      .update(Object.assign({}, category));
  }



}
