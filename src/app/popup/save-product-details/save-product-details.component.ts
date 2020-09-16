import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-save-product-details',
  templateUrl: './save-product-details.component.html',
  styleUrls: ['./save-product-details.component.scss']
})
export class SaveProductDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SaveProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close(false);
  }

}
