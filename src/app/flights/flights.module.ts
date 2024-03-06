import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { FLIGHTS_ROUTES } from './flights.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES)],
  declarations: [FlightsSearchComponent],
  providers: [CookieService],
})
export class FlightsModule {}
