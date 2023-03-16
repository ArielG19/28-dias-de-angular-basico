import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolacionOneWayComponent } from './interpolacion-one-way/interpolacion-one-way.component';
import { TwoWaydataBindingComponent } from './two-waydata-binding/two-waydata-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionOneWayComponent,
    TwoWaydataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //importando modulo para usar ngModel en los input
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
