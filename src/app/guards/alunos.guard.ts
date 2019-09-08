import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export class AlunosGuard implements CanActivateChild {

  //Método a ser implementado para validação da rota
  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('alunos.guard.ts')
    return true;
    
  }

}