import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from '../produtos/shared/produtos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage {
  categoria: string = 'Violões';
  categoriaSelecionada: Observable<any[]>;


  constructor(private router: Router,
              private produtosService: ProdutosService) { }


ngOnInit() {
  this.categoriaSelecionada = this.produtosService.getAllCategoriaSelecionada(this.categoria);
}
}
