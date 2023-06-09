import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent } from "./contact-form/contact-form.component";
//import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";  //ahora estan en su routing
import { PermissionsGuard } from "./guards/permissions.guard";
import { WithoutSaveGuard } from "./guards/without-save.guard";
import { NgForComponent } from "./ng-for/ng-for.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DetailsComponent } from "./others/details/details.component";
import { OtherComponent } from "./others/other/other.component";
//import { DataResolverService } from "./resolvers/data.resolver.service"; //ahora estan en su routing

const routes: Routes = [
    //redireccionamos al home
    {path:'',redirectTo:'/home',pathMatch:'full'}, //esta siempre debe ir al inicio ya que evalua deforma descendete

    //agregamos nuestro modulo de contacto
    {path: 'contact-reactive', loadChildren: ()=> import('../app/contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule) },

    {path: 'contact-form', component:ContactFormComponent, canDeactivate:[WithoutSaveGuard]}, //probando guard CanDeActive
    {path: 'home', component:NgForComponent},
    {path: 'others', component:OtherComponent, canActivate:[PermissionsGuard], //CanActive -> redirect
    children:[
        //creando rutas hijas -> parte de others
        {path:'details',component:DetailsComponent}
    ]},
    {path: '**', component:NotFoundComponent},//tiene que estar al final sino nos devolvera 404 siempre
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
}) 
export class AppRoutingModule{

}