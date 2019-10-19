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
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'esqueci-senha', loadChildren: './esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
