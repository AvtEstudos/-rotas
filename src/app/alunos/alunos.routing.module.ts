import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guards';
import { AlunosGuard } from './../guards/alunos.guard';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes = [
    //  Declarando rotas filhas, interessante para permitir 
    //que mais de um componente seja exibido
    //  Para o lazy loading (carregamento sob demanda)
    //deixar em branco a rota do componete cursos    
    //path: 'alunos', component: AlunosComponent, children : [
    { path: '', component: AlunosComponent, //Pai
        canActivateChild: [AlunosGuard],
        children : [ 
            //  Para evitar colisão das rotas alunos/novo vem 
            //antes das rotas com variaveis, como no caso do :id
            { path: 'novo', component: AlunoFormComponent },       //Filho
            { path: ':id', component: AlunoDetalheComponent },     //Filho
            { path: ':id/editar', component: AlunoFormComponent,   //Filho  
                canDeactivate: [AlunosDeactivateGuard] }  
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}