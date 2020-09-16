import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';

/*material*/ 
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './popup/add-product/add-product.component';
import { DeleteProductComponent } from './popup/delete-product/delete-product.component';
import { SaveProductDetailsComponent } from './popup/save-product-details/save-product-details.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProductComponent,
    ProductDetailsComponent,
    AddProductComponent,
    DeleteProductComponent,
    SaveProductDetailsComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  entryComponents:[
    AddProductComponent,
    DeleteProductComponent,
    SaveProductDetailsComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
