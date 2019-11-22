import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Guitar Shop',
      url: '/home',
      icon: 'contact'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'contact'
    },
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'list'
    },
    {
      title: 'Criar Conta',
      url: '/criar-conta',
      icon: 'person-add'
    },
    {
      title: 'Esqueci minha senha',
      url: '/esqueci-senha',
      icon: 'sync'
    },
    {
      title: 'Meus Pedidos',
      url: '/pedidos',
      icon: 'clipboard'
    },
    {
      title: 'Meu Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Meu Carrinho',
      url: '/carrinho',
      icon: 'person'
    },
    

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
