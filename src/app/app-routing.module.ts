import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'senha',
    loadChildren: () => import('./senha/senha.module').then( m => m.SenhaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'criarsimulado',
    loadChildren: () => import('./criarsimulado/criarsimulado.module').then( m => m.CriarsimuladoPageModule)
  },
  {
    path: 'simulado',
    loadChildren: () => import('./simulado/simulado.module').then( m => m.SimuladoPageModule)
  },
  {
    path: 'testes',
    loadChildren: () => import('./testes/testes.module').then( m => m.TestesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
