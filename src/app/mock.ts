import {delay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

export interface IProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  author: string;
  isFavourite: boolean;
}

export const products = [{
  id: 1,
  title: 'Apple',
  img: 'assets/img/product-1.png',
  price: 11,
  author: 'Apple Tree',
  isFavourite: true
}, {
  id: 2,
  title: 'Orange',
  img: 'assets/img/product-2.png',
  price: 112,
  author: 'Orange Tree',
  isFavourite: false
}, {
  id: 3,
  title: 'Banana',
  img: 'assets/img/product-3.png',
  price: 113,
  author: 'Banana Tree',
  isFavourite: false
}, {
  id: 4,
  title: 'Peach',
  img: 'assets/img/product-4.png',
  price: 11,
  author: 'Peach Tree',
  isFavourite: false
}, {
  id: 5,
  title: 'Lemon',
  img: 'assets/img/product-5.png',
  price: 115,
  author: 'Lemon Tree',
  isFavourite: true
}, {
  id: 6,
  title: 'Pineapple',
  img: 'assets/img/product-6.png',
  price: 122,
  author: 'Pineapple Tree',
  isFavourite: true
}, {
  id: 7,
  title: 'Mango',
  img: 'assets/img/product-7.png',
  price: 127,
  author: 'Mango Tree',
  isFavourite: false
}
];

export const products$: Observable<IProduct[]> = of(products)
  .pipe (
    delay(3000)
  );
