import { CategoryService } from './../../categories/shared/category.service';
import { Entrie } from './../shared/entries.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-entries-form',
  templateUrl: './entries-form.component.html',
  styleUrls: ['./entries-form.component.css']
})
export class EntriesFormComponent implements OnInit {



  entries: {} = new Entrie();
  categories$;



   ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(private categoriesService: CategoryService) {

  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAll();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entrie.types).map(
      ([value, text]) => {
          return {
            value: value,
            text: text
          };
       }
    );
  }



}
