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
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtherComponent } from './others/other/other.component';
import { DetailsComponent } from './others/details/details.component';

// cuando hay dos module -> indicar -m app para crear un nuevo componete

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionOneWayComponent,
    TwoWaydataBindingComponent,
    NgForComponent,
    AddCityComponent,
    FilterPipe,
    ContactFormComponent,
    ContactReactiveComponent,
    NavbarComponent,
    NotFoundComponent,
    OtherComponent,
    DetailsComponent,//declaramos nuestro pipe personalizado para poder usarlo
  ],
  imports: [
    BrowserModule,
    FormsModule, //importando modulo para usar ngModel en los input
    ReactiveFormsModule, //para trabajar formularios reactivos
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
