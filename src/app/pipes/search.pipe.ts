import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], productName: string): Product[] {
    if (!products || !productName) {
        return products;
    }

    return products.filter(product => 
         product.name.toLowerCase().indexOf(productName.toLowerCase()) !== -1 ||
         product.description.toLowerCase().indexOf(productName.toLowerCase()) !== -1);
}
}
