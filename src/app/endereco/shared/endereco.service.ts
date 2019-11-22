import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebasePath } from 'src/app/core/shared/firebase-path';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth) { }

  trazerEnderecosCaminho() {
  const path = `${FirebasePath.CLIENTES_ENDERECOS}${this.afAuth.auth.currentUser.uid}`;
  return path;
  }

  getEnderecosRef() {
    const path = this.trazerEnderecosCaminho();
    return this.db.list(path);
  }

  trazerTodosEnderecos() {
    return this.getEnderecosRef().snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({key: m.payload.key, ...m.payload.val() }) );
      })
    );
  }

  trazerPelaChave(key: string) {
    const path = `${this.trazerEnderecosCaminho()}/${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({key: change.key, ...change.payload.val()} );
      })
    );
  }

  novoEndereco(endereco: any) {
    return this.salvar(endereco, null);
  }

  update(endereco: any, key: string) {
    return this.salvar(endereco, key);
  }

  private salvar(endereco: any, key: string) {
    return new Promise( (resolve, reject) => {
      const enderecoRef = this.getEnderecosRef();

      if (key) {
        enderecoRef.update(key, endereco)
        .then( () => resolve(key) )
        .catch( () => reject());
      } else {
        enderecoRef.push(endereco)
        .then( (result: any) => resolve(result.key) );
      }
    });
  }

  remover(key: string) {
    return this.getEnderecosRef().remove(key);
  }










}
