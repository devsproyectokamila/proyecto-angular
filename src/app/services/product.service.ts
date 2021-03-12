import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* 
****Servicio para productos
*/
export class ProductService {
  
  // Articulos dentro del Carrito
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
    },
    {
      id: 4,
      nombre: 'Sony DSC-RX100M III',
      precio: 10,
      cantidad:1,
      imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'
    },
    {
      id: 5,
      nombre: 'Sony DSC-RX100M III',
      precio: 10,
      cantidad:1,
      imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'
    },
    {
      id: 6,
      nombre: 'Sony DSC-RX100M III',
      precio: 10,
      cantidad:1,
      imagen: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'
  },
  ];

  // Total de articulos únicos en el Carrito
  cart_size : number = this.cart.length
  
  //Total por productos en el carrito
  cart_total: number;

  constructor() { }

  //Método para obtener el total de los articulos dentro del carrito
  getTotal(){
    this.cart_total = 0;  
    
    this.cart.forEach(e =>{    
      this.cart_total = this.cart_total + (e.cantidad * e.precio);
    });

    this.cart_size = this.cart.length
  }

  // Agregar o Quitar un artículo del carrito
  addOrRemoveItem(target:any, add:boolean=true){
    // Se Recorre el arreglo para encontrar el articulo al cual se le sumará o restará un producto
    this.cart = this.cart.map(item =>{
      if(target.id === item.id){
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
  
  //Método para eliminar un articulo del carrito
  deleteItem(target:any){
    const itemIndex = this.cart.findIndex(x => x.id === target.id);   
    this.cart.splice(itemIndex,1);
    this.getTotal()
  }

  //Vaciar el carrito
  emptyCart(){
    this.cart = [];
    this.getTotal()
  }
}
