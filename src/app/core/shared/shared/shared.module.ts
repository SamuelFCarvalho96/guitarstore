import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PrecoComponent } from '../preco/preco.component';
import { ListaEnderecoPage } from 'src/app/endereco/lista-endereco/lista-endereco.page';


@NgModule({
  declarations: [PrecoComponent, ListaEnderecoPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    PrecoComponent,
    ListaEnderecoPage
  ],
  entryComponents: [PrecoComponent, ListaEnderecoPage ]
})
export class SharedModule { }
