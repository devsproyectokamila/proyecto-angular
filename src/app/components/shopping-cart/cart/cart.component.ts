import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public productService:ProductService
  ) { }

  ngOnInit(): void {
    // Actualiza total al crearse el carrito
    this.productService.getTotal();
  }
}
