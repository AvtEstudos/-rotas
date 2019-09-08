import { CanActivateChild, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class CursosGuard implements CanActivateChild {

  //Método a ser implementado para validação da rota
  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    return true;
    
  }
}