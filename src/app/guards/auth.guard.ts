import { Injectable } from '@angular/core';
import { CanActivate, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router, 
         CanLoad,
         Route} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})

//CanActivate: Esta implementação determina que a 
//             classe é uma guarda de rota  
export class AuthGuard implements CanActivate, CanLoad {

  //Método a ser implementado para validação da rota
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('canActivate: verificarAcesso()');
    return this.verificarAcesso()

  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private verificarAcesso(){
   
    if (this.authService.usuarioEstaAutenticado())
    {
      return true;
    }
    this.router.navigate(['/login']);    
    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: verificarAcesso()');
    return this.verificarAcesso()
  }
}
