import { CategoryService } from './../../categories/shared/category.service';
import { EntrieService } from './../../entries/shared/entrie.service';
import { Entrie } from './../../entries/shared/entrie.model';
import { Category } from './../../categories/shared/category.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  despesatotal: any = 0;
  receitaTotal: any = 0;
  saldoTotal: any = 0;


  despesaChartTotal: any;
  receitaChartTotal: any;

  chartOptions = {
    scale: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  categories: Array<Category> = [];
  entries: Entrie[] = [];

  @ViewChild('month') month: ElementRef = null;
  @ViewChild('year') year: ElementRef = null;

  constructor(private entrieService: EntrieService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    const cat = this.categoryService.getAllX().subscribe(x => {
       console.log('passou aqui ' , cat);
    });
  }

}
