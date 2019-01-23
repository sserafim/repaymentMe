import { Entrie } from './../shared/entrie.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntrieService } from '../shared/entrie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.css']
})
export class EntriesListComponent implements OnInit, OnDestroy {

  // entries;
  entriesX: Entrie[] = [];
  Entsubscription: Subscription;


  constructor(private entrieService: EntrieService) { }

  ngOnInit() {
    // this.entries = this.entrieService.getAll();
     this.entriesX = this.carregaEntrie();
  }

    carregaEntrie(): Entrie[] {
    const entriesLanc: Entrie[] = [];
      this.Entsubscription =  this.entrieService.getAll().subscribe(ent => {
             ent.forEach(element => {
              const xx = Object.assign(new Entrie() , element);
               entriesLanc.push(xx);
             });
           });
           return entriesLanc;
   }

  excluir(entrieId) {
    // tslint:disable-next-line:curly
    if (!confirm('Confirma a exclusão dessa Categoria')) return;
    this.entrieService.delete(entrieId);
}

ngOnDestroy() {
    this.Entsubscription.unsubscribe();
}

}
