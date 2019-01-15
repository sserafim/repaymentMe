import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: any =  [
    {id: '1', nome: 'Moradia', description: 'Pagamento sera que muda'},
    {id: '2', nome: 'Lazer', description: 'Pagamento aluguel'},
    {id: '3', nome: 'Carro', description: 'Pagamento aluguel'},
    {id: '4', nome: 'Viagem', description: 'Pagamento aluguel'}
];

  constructor(private categoryService: CategoryService ) { }

  ngOnInit() {
    this.categoryService.addCategory(this.category);
  }

}
