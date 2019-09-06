import { Injectable } from '@angular/core';
import { CanActivate, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})

//CanActivate: Esta implementação determina que a 
//             classe é uma guarda de rota  
export class AuthGuard implements CanActivate {

  //Método a ser implementado para validação da rota
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if (this.authService.usuarioEstaAutenticado())
    {
      return true;
    }
    this.router.navigate(['/login']);    
    return false;
    
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}
