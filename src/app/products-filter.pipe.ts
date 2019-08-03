import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './mock';

@Pipe({
  name: 'productsFilter'
})

export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string, onlyFavourites: boolean = false): IProduct[] {
    let result = products;
    if (onlyFavourites) {
      result = result.filter( (product: IProduct) => {
        return product.isFavourite === onlyFavourites;
      });
    }
    if (!searchTerm) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
