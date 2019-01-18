import { EntriesService } from './shared/entries.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntriesFormComponent } from './entries-form/entries-form.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';






@NgModule({
  declarations: [EntriesListComponent, EntriesFormComponent],
  imports: [
    CommonModule,
    EntriesRoutingModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    CurrencyMaskModule,
    CalendarModule
  ],
  providers: [
    EntriesService
  ],
})
export class EntriesModule { }
