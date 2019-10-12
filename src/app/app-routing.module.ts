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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'lista-produtos', loadChildren: './produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule' },
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
