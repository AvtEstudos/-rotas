import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
        
        canDeactivate(
            component: AlunoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            return component.podeMudarRota ? component.podeMudarRota() : true;
    }
}
