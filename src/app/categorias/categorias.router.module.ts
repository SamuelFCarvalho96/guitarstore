import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasPage } from './categorias.page';

const routes: Routes = [
    {
      path: '',
      component: CategoriasPage,
      children: [
        {
          path: 'tab-violao',
          children: [
            {
              path: '', loadChildren: () =>
               import ('../tab-violao/tab-violao.module').then(m => m.TabViolaoPageModule)
            }
          ]
        },
        {
          path: 'tab-guitarras',
          children: [
            {
              path: '', loadChildren: () =>
               import ('../tab-guitarras/tab-guitarras.module').then(m => m.TabGuitarrasPageModule)
            }
          ]
        },
        {
          path: 'tab-baixos',
          children: [
            {
              path: '', loadChildren: () =>
               import ('../tab-baixos/tab-baixos.module').then(m => m.TabBaixosPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/categorias/tab-violao',
          pathMatch: 'full'
        }
      ]
    },
    // {
    //   path: 'pedido',
    //   children: [
    //     {
    //       path: 'carrinho/novo-item/:key',
    //       loadChildren: '../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
    //     },
    //     {
    //       path: 'carrinho',
    //       loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
    //     },
    //     {
    //       path: 'forma-pagamento',
    //       loadChildren: '../pedidos/form-pagamento/form-pagamento.module#FormPagamentoPageModule'
    //     },
    //     {
    //       path: 'produtos/:key',
    //       loadChildren: '../pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule'
    //     }
    //   ]
    // },
    {
      path: '',
      redirectTo: '/categorias/tab-violao',
      pathMatch: 'full'
    }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasPageRoutingModule {}
