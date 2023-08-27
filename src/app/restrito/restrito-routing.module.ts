import { RouterModule, Routes } from "@angular/router";
import { RestritoComponent } from "./restrito.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ReadProductComponent } from "./read-product/read-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { NgModule } from "@angular/core";

const restritoRoutes: Routes = [
  { path: 'restrito', component: RestritoComponent, children: [
    { path: 'cadastro', component: CreateProductComponent},
    { path: 'lista', component: ReadProductComponent},
    { path: 'editar/:id', component: UpdateProductComponent}

  ]},

  { path: '', redirectTo: '/restrito/lista', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule]
})

export class RestritoRoutingModule {}
