import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public productService:ProductService
    ) { }

  ngOnInit(): void {
  }

  showCart(){ 
    $(".shopping-cart").slideToggle();    
  }

}
