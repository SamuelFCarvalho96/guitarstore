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
  { path: 'form-item-pedido', loadChildren: './pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule' },

  { path: 'form-endereco',
    loadChildren: () => import('./endereco/form-endereco/form-endereco.module').then(m => m.FormEnderecoPageModule)
  },
  { path: 'lista-endereco',
    loadChildren: () => import('./endereco/lista-endereco/lista-endereco.module').then(m => m.ListaEnderecoPageModule)
  },
  { path: 'enderecos',
    loadChildren: () => import ('./endereco/lista-endereco/lista-endereco.module').then(m => m.ListaEnderecoPageModule)
  },
  { path: 'enderecos/novo',
    loadChildren: () => import ('./endereco/form-endereco/form-endereco.module').then(m => m.FormEnderecoPageModule)
  },
  { path: 'enderecos/editar/:key',
    loadChildren: () => import ('./endereco/form-endereco/form-endereco.module').then(m => m.FormEnderecoPageModule)
  },
  { path: 'carrinho/novo-item/:key',
    loadChildren: () => import ('./pedidos/form-item-pedido/form-item-pedido.module').then(m => m.FormItemPedidoPageModule)
  },
  // { path: 'carrinho',
  //   loadChildren: () => import ('./pedidos/')
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
