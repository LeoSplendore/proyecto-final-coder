var ron = ['Habana Club','Appleton estate','Bacardi','Brugal'];
var gin = ['Beefeater','Bombay','Bulldog','Tanqueray'];

var BebidasBlancas = ron.concat(gin);
console.log(BebidasBlancas);



function CarritoDeCompras(){
    this.compra = []
    this.agregarAlCarrito = function(producto) { 
       this.compra.push(producto)
    }
}
class Producto{
    Constructor(producto,precio,cantidad){
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
// Simulacion de que algun usuario haya hecho click en el boton de agregar al carrito
var nuevaCompra = new Producto ('ron Captain Morgan',1800, 2);
console.log(nuevaCompra)
