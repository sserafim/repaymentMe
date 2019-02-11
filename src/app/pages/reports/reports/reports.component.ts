import { Subscription } from 'rxjs';
import { CategoryService } from './../../categories/shared/category.service';
import { EntrieService } from './../../entries/shared/entrie.service';
import { Entrie } from './../../entries/shared/entrie.model';
import { Category } from './../../categories/shared/category.model';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

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

  categories: Category[] = [];
  entries: Entrie[] = [];

  catSubscription: Subscription;
  entSubscription: Subscription;

  @ViewChild('month') month: ElementRef = null;
  @ViewChild('year') year: ElementRef = null;

  constructor(private entrieService: EntrieService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.fetchCategories();
  }

  fetchCategories(): Category[] {
      const categLanc: Category[] = [];
     this.catSubscription = this.categoryService.getAll().subscribe(cat => {
        cat.forEach(element => {
          const xx = Object.assign(new Category(), element);
          categLanc.push(xx);
        });
      });
      return categLanc;
  }


  fetchEntries(): Entrie[] {
    const entrieLanc: Entrie[] = [];
    this.entSubscription = this.entrieService.getAll().subscribe(ent => {
      ent.forEach(element => {
        const yy = Object.assign(new Entrie(), element);
        entrieLanc.push(yy);
      });
    });
      return entrieLanc;
  }

  generateReport() {
    const month = this.month.nativeElement.value;
    const year = this.year.nativeElement.value;

    if (!month || !year) {
      alert('Você precisa selecionar o Mês e o Ano');
     } else {
        this.entrieService.getByMonthAndYear(month, year).subscribe(this.setValues.bind(this));
      }
    }

  setValues(entr: Entrie[]) {
    this.entries = entr;
    this.calculateBalance();
    this.setChartData();
  }

  calculateBalance() {
    let despesaTotal = 0;
    let receitaTotal = 0;
    this.entries.forEach(entrie => {
      console.log('passou aqui tipoDespesa >>> ', entrie.tipoDespesa);
      if (entrie.tipoDespesa === 'despesa') {
           despesaTotal += entrie.valor;
      } else {
          receitaTotal +=  entrie.valor;
      }
    });

  this.receitaTotal = receitaTotal;
  this.despesatotal = despesaTotal;
  this.saldoTotal =  receitaTotal - despesaTotal;

  }

  setChartData() {
      this.categories.forEach(category => {
      const filteredEntries = this.entries.filter(entry => (entry.category === category.nome) && (entry.tipoDespesa === 'receita'));
      });
  }



  ngOnDestroy() {
    this.catSubscription.unsubscribe();
    this.entSubscription.unsubscribe();
  }

}
