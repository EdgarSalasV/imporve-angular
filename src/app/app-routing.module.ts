import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { ProductComponent } from './product/product.component';
import { TableProductComponent } from './product/table-product/table-product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'xyz', component: XyzComponent },
  {
    path: 'product',
    children: [
      { path: '', component: ProductComponent },
      { path: 'table', component: TableProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
