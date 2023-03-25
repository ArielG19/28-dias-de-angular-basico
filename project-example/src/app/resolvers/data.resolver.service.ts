import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({providedIn:'root'})
export class DataResolverService implements Resolve<any> {
    resolve(): Observable<any>{
     //Call service
     const departaments = ['marketing', 'sales','cloud','programming','others'];
     return of (departaments);   
    }
}
//resolver sirve para que la data de un componente al cargarse la pagina ya este disponible.
//se nota más con el uso api//uso correcto