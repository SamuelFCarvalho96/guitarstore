import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private afAuth: AngularFireAuth) { }

  novaConta(usuario: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((userCredential: firebase.auth.UserCredential) => {
          userCredential.user.updateProfile({ displayName: usuario.nome, photoURL: '' });
          userCredential.user.sendEmailVerification();
          this.deslogar();
          resolve();
        })
        .catch((error: any) => {
          reject(this.mensagemErro(error));
        });
    });
  }

  deslogar() {
    return this.afAuth.auth.signOut();
  }

  TrazerDadosUsuario() {
    const usuario = {name: '', email: ''};
    if (this.afAuth.auth.currentUser) {
      usuario.name = this.afAuth.auth.currentUser.displayName;
      usuario.email = this.afAuth.auth.currentUser.email;
    }

    return usuario;
  }

  login(email: string, senha: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, senha)
        .then((userCredential: firebase.auth.UserCredential) => {
          if (userCredential.user.emailVerified) {
            resolve();
          } else {
            this.deslogar();
            reject('Seu e-mail ainda não foi verificado. Por favor verifique seu e-mail.');
          }
        })
        .catch((error: any) => {
          reject(this.mensagemErro(error));
        });
    });
  }

  enviarEmailResetarSenha(email: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => {
          resolve();
        })
        .catch((error: any) => {
          reject(this.mensagemErro(error));
        });
    });
  }

  mensagemErro(erro: any) {
    let mensagem = '';
    if (erro.code === 'auth/email-already-in-use') {
      mensagem = 'O e-mail informado já está sendo usado.';
    } else if (erro.code === 'auth/invalid-email') {
      mensagem = 'O e-mail informado é inválido.';
    } else if (erro.code === 'auth/operation-not-allowed') {
      mensagem = 'A autenticação por email e senha não está habilitada';
    } else if (erro.code === 'auth/weak-password') {
      mensagem = 'A senha utilizada é muito fraca. Por favor escolha outra senha.';
    } else if (erro.code === 'auth/user-disabled') {
      mensagem = 'O usuário está desabilitado, por favor contact o administrador.';
    } else if (erro.code === 'auth/user-not-found' || erro.code === 'auth/wrong-password') {
      mensagem = 'O usuario/senha inválido(s)';
    }

    return mensagem;
   }

}
