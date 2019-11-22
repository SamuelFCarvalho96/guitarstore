import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { FirebasePath } from 'src/app/core/shared/firebase-path';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private db: AngularFireDatabase) { }

  // Trazer todos os dados do banco

  getAll(categoriaKey: string = null) {
    return this.db.list(FirebasePath.PRODUTOS, q => {
      if (categoriaKey) {
        return q.orderByChild('categoriaKey').equalTo(categoriaKey);
      } else {
        return q.orderByChild('nome');
      }
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val()}));
      })
    );
  }

  // Trazer todas as categorias

  getCategoriasAll() {
    return this.db.list(FirebasePath.CATEGORIAS).snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  // Trazer um produto pela chave

  getByKey(key: string) {
    const path = `${FirebasePath.PRODUTOS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val()});
      })
    );
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
