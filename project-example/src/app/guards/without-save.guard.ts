import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //throw new Error('Method not implemented.');
    if(this.hasUser()){
      return true;
    }
    //aqui podermos hacer el redirect al login
    return confirm('Tienes datos sin guardar');

  
  }
  //simulamos tener un usuario logueado
  hasUser(){
    return false;
  }
 
  
}
