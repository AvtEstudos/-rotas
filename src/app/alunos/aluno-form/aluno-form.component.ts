import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iForm-candeactivate';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  id: number; 
  inscricao: Subscription;
  aluno: any;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(    
      (params: any) => {
        this.id = params['id'];    
        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno == null){
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy() {  
    this.inscricao.unsubscribe();
  }  

  onInput(){
    this.formMudou = true;
    console.log('Mudou');
  }

  podeMudarRota(){
    if (this.formMudou){
      return confirm('Tem certeza que deseja sair?');
    }

    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
