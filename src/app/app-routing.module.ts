import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //Configuração para o lazyloading (carregamento sob demanda)
  //1. Nome da rota, 
  //2. Troca o componet por loadChildren    
  //3. Indica o caminho completo do módulo # Nome do módulo
  //4. Mais ninguém pode referencia o módulo, por isso
  //   precisamos retirar CursosModule app.module.ts
  //5. Retirar cursos do módulo de rotas de cursos
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule' },
  { path: '', component: HomeComponent  },
  { path: 'login', component: LoginComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
