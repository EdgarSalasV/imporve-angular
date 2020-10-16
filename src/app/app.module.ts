import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { TableProductComponent } from './product/table-product/table-product.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ProductComponent,
    HomeComponent,
    TableProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
