import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos/shared/produtos.service';

@ Component({
  selector: 'app-categoria-selecionada',
  templateUrl: './categoria-selecionada.page.html',
  styleUrls: ['./categoria-selecionada.page.scss'],
})
export class CategoriaSelecionadaPage implements OnInit {
  produtos: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaEscolhida: string;

  constructor(private router: Router,
              private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll();
    this.categorias = this.produtosService.getCategoriasAll();
  }

  buscarProdutos(categoriaKey: string) {
    this.produtos = this.produtosService.getAll(this.categoriaEscolhida);
    this.router.navigate(['produtos/lista-produtos', categoriaKey]);
  }

}
