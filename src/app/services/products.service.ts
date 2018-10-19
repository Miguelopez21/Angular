import { Injectable } from '@angular/core';
import { Products } from '../shared/products';
import { PRODUCTS } from '../shared/PRODUCTS_LIST';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  getProduct(id:number) : Products{
    return PRODUCTS.filter((prod) => {return prod.id})[0]; 
  }

  getProducts():Products[]{
    return PRODUCTS;
  }
}

