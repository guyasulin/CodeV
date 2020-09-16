import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './popup/add-product/add-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public products: Product[];
  public filterProducts: Product[];
  public productSelected: Product = null;
  public pageIndex:number;
  public sortType: any;
  public productName:string

  constructor(private productService: ProductService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((res) => {
        this.products = res;
      })
  }

  showMoreDetails(product: Product) {
    this.productSelected = new Product(product);
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.products.unshift(result)
      }
    });
  }

  saveDetails(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
        if(element.id == product.id){
          this.products[i] = product;
          break
        }
    }
  }

  deleteProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == product.id) {
        this.productSelected = null;
        this.products.splice(i, 1)
        break;
      }
    }
  }
  

  pageEvent(event) {
    this.pageIndex = event.pageIndex;
   }
}
