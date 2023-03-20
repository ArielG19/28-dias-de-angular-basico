import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolacionOneWayComponent } from './interpolacion-one-way/interpolacion-one-way.component';
import { TwoWaydataBindingComponent } from './two-waydata-binding/two-waydata-binding.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AddCityComponent } from './add-city/add-city.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionOneWayComponent,
    TwoWaydataBindingComponent,
    NgForComponent,
    AddCityComponent,
    FilterPipe,
    ContactFormComponent,
    ContactReactiveComponent,//declaramos nuestro pipe personalizado para poder usarlo
  ],
  imports: [
    BrowserModule,
    FormsModule, //importando modulo para usar ngModel en los input
    ReactiveFormsModule, //para trabajar formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
