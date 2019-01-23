import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    CurrencyMaskModule,
    CalendarModule
  ],
  exports: [
    // Compartilha os módulos nas pages >>>> sendo assim, todo o sistema
    CommonModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    CurrencyMaskModule,
    CalendarModule
  ]
})
export class SharedModule { }
