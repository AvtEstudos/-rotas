import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number; 
  inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        this.aluno = info.aluno;
      }
    );
    /*this.inscricao = this.route.params.subscribe(    
      (params: any) => {
        this.id = params['id'];    
        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    )*/        
  }

  editarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {  
    this.inscricao.unsubscribe();
  }  

}
