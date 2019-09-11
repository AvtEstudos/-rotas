import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './iForm-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
        
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            //return component.podeMudarRota ? component.podeMudarRota() : true;
            return component.podeDesativar();
    }
}
