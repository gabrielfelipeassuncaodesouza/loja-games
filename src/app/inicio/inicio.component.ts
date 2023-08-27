import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) {}

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe(
      returnProduct => {
        this.produtos = returnProduct.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.description,
              item.photo,
              item.preco
            );
          })
      })
  }

  ngOnInit(): void {
      this.listarProdutos();
  }
}
