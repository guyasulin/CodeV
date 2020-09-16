import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { DeleteProductComponent } from '../popup/delete-product/delete-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() details = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showMoreDetails(product: Product) {
    this.details.emit(product);
  }

  
  openDialogDelete(product: Product) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '380px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.remove.emit(product)
      }
    });
  }
}
