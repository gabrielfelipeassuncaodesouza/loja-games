import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _router: Router) {}

  cadastrar(): void {
    this._produtoService.addProduct(this.produto).subscribe(
      produto => {
        this.produto = new Produto(
          0,
          "",
          "",
          "",
          0
        );
        alert("Cadastrado com sucesso");
      },
      err => {
        alert("Erro ao cadastrar");
      })

    this._router.navigate(["/restrito/lista"]);
  }
}
