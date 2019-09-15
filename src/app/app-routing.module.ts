import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //Configuração para o lazyloading (carregamento sob demanda)
  //1. Nome da rota, 
  //2. Troca o componet por loadChildren    
  //3. Indica o caminho completo do módulo # Nome do módulo
  //4. Mais ninguém pode referencia o módulo, por isso
  //   precisamos retirar CursosModule app.module.ts
  //5. Retirar cursos do módulo de rotas de cursos
  { path: 'cursos', 
      loadChildren: './cursos/cursos.module#CursosModule',
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
  },
  { path: 'alunos', 
      loadChildren: './alunos/alunos.module#AlunosModule',
      canActivate: [AuthGuard],
      canLoad: [AuthGuard]      
  },
  { path: 'login', 
      component: LoginComponent      
  },
  { path: 'home', 
      component: HomeComponent,  
      canActivate: [AuthGuard]
  },  
  { path: '', 
      redirectTo: '/home',        
      pathMatch: 'full'
  },  
  //Rota para página não encontrada
  { path: '**',
      component: PaginaNaoEncontradaComponent,
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
