import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../model/product';
import { SaveProductDetailsComponent } from '../popup/save-product-details/save-product-details.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public form: FormGroup;
  public tiltSettings: string;
  @Input() product: Product;
  @Output() save = new EventEmitter();

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
      price: [null, [
        Validators.required,
      ]]
    });
  }

  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get price() {
    return this.form.get('price');
  }

  onDialogSave(product: Product) {
    this.save.emit(product);
    const dialogRef = this.dialog.open(SaveProductDetailsComponent, {
      width: '380px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
