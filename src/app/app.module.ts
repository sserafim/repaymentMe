import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule' },
      { path: 'entries', loadChildren: './pages/entries/entries.module#EntriesModule' }
    ])

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
