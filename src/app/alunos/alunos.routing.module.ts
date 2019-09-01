import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes = [
    //  Declarando rotas filhas, interessante para permitir 
    //que mais de um componente seja exibido
    //  Para o lazy loading (carregamento sob demanda)
    //deixar em branco a rota do componete cursos    
    //path: 'alunos', component: AlunosComponent, children : [
    { path: '', component: AlunosComponent, children : [ //Pai
        //  Para evitar colisão das rotas alunos/novo vem 
        //antes das rotas com variaveis, como no caso do :id
        { path: 'novo', component: AlunoFormComponent },       //Filho
        { path: ':id', component: AlunoDetalheComponent },     //Filho
        { path: ':id/editar', component: AlunoFormComponent }  //Filho  
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}