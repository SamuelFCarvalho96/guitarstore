import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';
import { SharedModule } from '../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPage,
    children: [
      {
        path: 'categorias',
        loadChildren: '../categorias/categorias.module#CategoriasPageModule'
      },
      {
        path: '',
        redirectTo: '/categorias/categorias',
        pathMatch: 'full'
      }
    ]
  },
//  // {
//     path: '',
//     redirectTo: '/tabs/produtos',
//     pathMatch: 'full'
//   }  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriasPage]
})
export class CategoriasPageModule {}
