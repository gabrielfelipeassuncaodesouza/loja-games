import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient:HttpClient) { }

  getProduto(id:any): Observable<Produto> {
    const urlIdProduct = `${this.url}?id=${id}`;
    return this._httpClient.get<Produto>(urlIdProduct);
  }

  getProdutos():Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);
  }

  addProduct(produto: Produto[]): Observable<Produto[]> {
    return this._httpClient.post<Produto[]>(this.url, produto);
  }

  deleteProduct(id:any): Observable<Produto> {
    const urlIdProduct = `${this.url}?id=${id}`;
    return this._httpClient.delete<Produto>(urlIdProduct);
  }

  updateProduct(id:any, produto:Produto): Observable<Produto> {
    const urlIdProduct = `${this.url}?id=${id}`;
    return this._httpClient.put<Produto>(urlIdProduct, produto);
  }
}
