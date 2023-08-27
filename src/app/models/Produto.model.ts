export class Produto {
  id:number;
  produto:string;
  description:string;
  photo:string;
  preco:number;

  constructor(id:number, produto:string, description:string, photo:string, preco:number) {
    this.id = id;
    this.produto = produto;
    this.description = description;
    this.photo = photo;
    this.preco = preco;
  }
}
