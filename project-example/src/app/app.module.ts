import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolacionOneWayComponent } from './interpolacion-one-way/interpolacion-one-way.component';
import { TwoWaydataBindingComponent } from './two-waydata-binding/two-waydata-binding.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AddCityComponent } from './add-city/add-city.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionOneWayComponent,
    TwoWaydataBindingComponent,
    NgForComponent,
    AddCityComponent,
    FilterPipe,//declaramos nuestro pipe personalizado para poder usarlo
  ],
  imports: [
    BrowserModule,
    FormsModule, //importando modulo para usar ngModel en los input
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
