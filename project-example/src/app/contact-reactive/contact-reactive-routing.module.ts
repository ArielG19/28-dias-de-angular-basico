import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ContactReactiveComponent } from './contact-reactive.component';

//creamos un nuevo routing para trabajar lazyloading
const routes: Routes = [
  //aqui la ruta se puede dejar en blanco, ya que el modulo principal se especifica.
  {path: '', component:ContactReactiveComponent,resolve:{departaments:DataResolverService}},//implementamos nuestro resolve
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
