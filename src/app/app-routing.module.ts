import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./produtos/lista-produtos/lista-produtos.module').then(m => m.ListaProdutosPageModule)
  },
  { path: 'lista-produtos', loadChildren: './produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule' },

  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Usuarios/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./Usuarios/criar-conta/criar-conta.module').then(m => m.CriarContaPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./Usuarios/esqueci-senha/esqueci-senha.module').then(m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Usuarios/perfil/perfil.module').then(m => m.PerfilPageModule)
  },

  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },

  { path: 'categoria-selecionada',
    loadChildren: () => import('./categoria-selecionada/categoria-selecionada.module').then(m => m.CategoriaSelecionadaPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
