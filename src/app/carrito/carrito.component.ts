import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  baseDeDatos = [
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

  total:number=0;
  articulos:number=0;
  constructor() { }

  ngOnInit(): void {
    this.calcularMonto();
  }

  mostrarCarrito(){ 
    $(".shopping-cart").slideToggle();    
  }


  calcularMonto(){
    this.total = 0;  
    this.articulos = 0;  
    this.baseDeDatos.forEach(e =>{    
      this.total = this.total + (e.cantidad * e.precio);
    });
    this.articulos = this.baseDeDatos.length;
  }

  sumarCantidad(obj){
   this.baseDeDatos = this.baseDeDatos.map(item =>{
    if(obj.id === item.id){
      let c = item.cantidad + 1;     
      return {... item,cantidad:c}
    }else{
      return item;
    }
   });   
   this.calcularMonto();
  }

  restarCantidad(obj){
    this.baseDeDatos = this.baseDeDatos.map(item =>{
      if(obj.id === item.id){
        if(item.cantidad > 1){
          let c = item.cantidad - 1;
          return {... item,cantidad:c}
        }
        return item;
      }else{
        return item;
      }
     });
     this.calcularMonto();
  }

  eliminarItem(obj){
   const index = this.baseDeDatos.findIndex(x => x.id === obj.id);   
   this.baseDeDatos.splice(index,1);
   this.calcularMonto();
  }

  vaciarCarrito(){
    this.baseDeDatos = [];
    this.calcularMonto();
  }
}
