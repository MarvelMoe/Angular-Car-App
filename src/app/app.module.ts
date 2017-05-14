import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarListingComponent } from './car-listing/car-listing.component';
import { CarService } from './services/car.service';
import { CarListingFormComponent } from './car-listing-form/car-listing-form.component'


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListingComponent,
    CarListingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
