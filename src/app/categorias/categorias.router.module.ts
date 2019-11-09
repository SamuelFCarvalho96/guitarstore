import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CategoriasPage } from './categorias.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CategoriasPageRoutingModule
  ],
  declarations: [CategoriasPage]
})
export class TabsPageModule {}
