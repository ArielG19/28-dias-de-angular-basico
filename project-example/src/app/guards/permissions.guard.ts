import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  // canActive -> permite a un determinado usuario acceder o no a x ruta.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true;
    }
    //aqui podermos hacer el redirect al login
    alert('No estas registrado, el guard funciona');
    return false;
  }
  //simulamos tener un usuario logueado
  hasUser(){
    return false;
  }
  
}
