import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from '../../../services/product.service';

// Variables JQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {
  /* 
  Injectar dependencias: 
  *Servicio del modal 
  *Servicio de productos
  **/
  constructor(
    private modalService: NgbModal,
    public productService:ProductService
  ) {}

  ngOnInit(): void {
  }

  // Método para abrir el Modal y ocultar el menu del carrito
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'})
    $(".shopping-cart").slideToggle();
  }
  // Método para vaciar el carrito con funcionalidad extra de cerrar el modal
  emptyCart(){
    this.productService.emptyCart()
    if (this.productService.cart_size==0)
      this.modalService.dismissAll()
  }
}
