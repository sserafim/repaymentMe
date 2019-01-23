import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryService } from './shared/category.service';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ],
  providers: [
    CategoryService
  ],
})
export class CategoriesModule { }
