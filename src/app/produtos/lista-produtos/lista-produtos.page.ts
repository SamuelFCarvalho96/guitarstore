import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProdutosService } from '../shared/produtos.service';

@ Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {
  produtos: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriasSelecionada: string;
  carrinhoPossuiItens: boolean = false;

  constructor(private router: Router,
              private produtosService: ProdutosService) { }

  ngOnInit() {
  }

}