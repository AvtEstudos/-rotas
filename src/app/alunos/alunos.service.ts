import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'André', email: 'andre@teste.com' },
    { id: 2, nome: 'Heitor', email: 'heitor@teste.com' },
    { id: 3, nome: 'Aluno', email: 'aluno@teste.com' }
  ] 
  
  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    for (let i=0; i < alunos.length; i++){
      let aluno = alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }

    return null;  
  }
  
  constructor() { }
}
