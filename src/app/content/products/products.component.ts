import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/shared/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Producto:Products; 
  Productos:Products[];   
  constructor(public productsService:ProductsService) { }

  ngOnInit() {
    this.Producto = this.productsService.getProduct(1);
    this.Productos = this.productsService.getProducts();
  }

}
