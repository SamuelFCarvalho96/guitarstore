import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = {};
  constructor(private usuariosService: UsuariosService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = this.usuariosService.TrazerDadosUsuario();
  }

  deslogar() {
    this.usuariosService.deslogar()
    .then(() => {
      this.router.navigate(['/login']);
    });
  }

}
