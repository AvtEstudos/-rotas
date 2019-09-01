import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any[] = [];

  constructor(
    //Injeção de dependência do serviço de aluno
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
