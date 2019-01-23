import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntriesFormComponent } from './entries-form/entries-form.component';
import { EntrieService } from './shared/entrie.service';


@NgModule({
  declarations: [EntriesListComponent, EntriesFormComponent],
  imports: [
    SharedModule,
    EntriesRoutingModule
  ],
  providers: [
    EntrieService
  ],
})
export class EntriesModule { }
