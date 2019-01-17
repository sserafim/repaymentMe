import { EntriesService } from './shared/entries.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntriesFormComponent } from './entries-form/entries-form.component';

@NgModule({
  declarations: [EntriesListComponent, EntriesFormComponent],
  imports: [
    CommonModule,
    EntriesRoutingModule
  ],
  providers: [
    EntriesService
  ],
})
export class EntriesModule { }
