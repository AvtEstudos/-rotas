import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
@NgModule({
  declarations: [
    AlunosComponent, 
    AlunoFormComponent, 
    AlunoDetalheComponent
  ],
  
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],

  providers: [
    AlunosService    
  ]

})
export class AlunosModule { }
