import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolateComponent } from './components/chocolate/chocolate.component';
import { ChocolateDetailsComponent } from './components/chocolate-details/chocolate-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChocolateComponent,
    ChocolateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgxPaginationModule,
	NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
