import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { NgForComponent } from "./ng-for/ng-for.component";

const routes: Routes = [
    //redireccionamos al home
    {path:'',redirectTo:'/home',pathMatch:'full'}, //esta siempre debe ir al inicio ya que evalua deforma descendete
    {path: 'contact-reactive', component:ContactReactiveComponent},
    {path: 'contact-form', component:ContactFormComponent},
    {path: 'home', component:NgForComponent},
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}) 
export class AppRoutingModule{

}