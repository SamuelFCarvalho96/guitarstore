import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TabViolaoPage } from './tab-violao.page';
import { SharedModule } from '../core/shared/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TabViolaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabViolaoPage]
})
export class TabViolaoPageModule {}
