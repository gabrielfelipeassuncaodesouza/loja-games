import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router, private _activateRoute: ActivatedRoute) {
    this._activateRoute.params.subscribe(
      params => {
        this.produtoId = params['id'];
      })
  }

  ngOnInit(): void {
      this.listarProduto()
  }

  listarProduto():void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (response: any) => {
        this.produto = new Produto(
          response[0].id,
          response[0].produto,
          response[0].description,
          response[0].photo,
          response[0].preco
        );
      })
  }

  atualiza(id: number) {
    this._produtoService.updateProduct(id, this.produto).subscribe(
      produto => {
        this.produto = new Produto(
          0,
          "",
          "",
          "",
          0
        );
        alert("Atualizado com sucesso");
      },
      err => {
        alert("Erro ao atualizar")
      })

    this._router.navigate(["/restrito/lista"]);
  }
}
