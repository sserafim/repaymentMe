import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: any = new Category;
  id;

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
        if (this.id) {
          this.categoryService.get(this.id).valueChanges().pipe(take(1)).subscribe(c => {
              this.category = c;
          });
        }
   }

  save(category) {
    if (this.id) {
      this.categoryService.update(this.id, category);
    } else {
    this.categoryService.create(category);
    }
    this.router.navigate(['/categories']);
  }

  delete() {
    // tslint:disable-next-line:curly
    if (!confirm('Confirma a exclusão dessa Categoria')) return;

        this.categoryService.delete(this.id);
        this.router.navigate(['/categories']);
  }


  ngOnInit() {

  }

}
