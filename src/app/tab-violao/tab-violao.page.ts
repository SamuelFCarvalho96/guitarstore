import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos/shared/produtos.service';
import { FirebasePath } from '../core/shared/firebase-path';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@ Component({
  selector: 'app-tab-violao',
  templateUrl: './tab-violao.page.html',
  styleUrls: ['./tab-violao.page.scss'],
})
export class TabViolaoPage implements OnInit {
  produtos: Observable<any[]>;
  // categorias: Observable<any[]>;
  // produtosService: any;
  // categoriaSelecionada: Observable<any[]>;
  // categoria: string = 'Violões';

  constructor(private router: Router,
              private produtoService: ProdutosService,
              private db: AngularFireDatabase) { }

  ngOnInit() {

  }

  getAllCategoriaSelecionada(categoria: string = null) {
    return this.db.list(FirebasePath.PRODUTOS, q => {
      if (categoria) {
        return q.orderByChild('categoriaNome').equalTo(categoria);
      }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val()}));
      })
    );
  }

}
