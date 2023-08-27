import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})

export class ReadProductComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _router: Router, private _loginService: LoginService) {}

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

  excluir(id:number) {
    this._produtoService.deleteProduct(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => {
        alert("Erro ao excluir");
      })

      this._router.navigate(["/restrito/lista"]);
  }

  ngOnInit(): void {
      this.listarProdutos();
      this._loginService.setMostraMenu(false);
  }
}
