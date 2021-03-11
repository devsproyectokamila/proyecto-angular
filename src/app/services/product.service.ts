import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  cart : any = [
    {
        id: 1,
        nombre: 'Sony DSC-RX100M III',
        precio: 10,
        cantidad:1,
        imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'
    },
    {
        id: 2,
        nombre: 'KS Automatic',
        precio: 10,
        cantidad:1,
        imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg'
    },
    {
        id: 3,
        nombre: 'Kindle, 6" Glare-Free',
        precio: 10,
        cantidad:1,
        imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg'
    }
  ];

  cart_size : number = this.cart.length
  
  cart_total: number;

  constructor() { }

  getTotal(){
    this.cart_total = 0;  
    
    this.cart.forEach(e =>{    
      this.cart_total = this.cart_total + (e.cantidad * e.precio);
    });

    this.cart_size = this.cart.length
  }

  addOrRemoveItem(target:any, add:boolean=true){
    this.cart = this.cart.map(item =>{
      if(target.id === item.id){
        let qty = 0
        if(add){
          item.cantidad++;
        }
        else{
          if (item.cantidad > 1)
            item.cantidad--; 
        }   
      }
      return item;
    });
    this.getTotal()   
  }

  deleteItem(target:any){
    const itemIndex = this.cart.findIndex(x => x.id === target.id);   
    this.cart.splice(itemIndex,1);
    this.getTotal()
  }

  emptyCart(){
    this.cart = [];
    this.getTotal()
  }
}
