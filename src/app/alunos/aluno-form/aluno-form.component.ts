import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';
@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number; 
  inscricao: Subscription;
  aluno: any;

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

}
