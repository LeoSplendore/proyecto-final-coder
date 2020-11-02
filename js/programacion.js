function CarritoDeCompras(){
    this.compra = []
    this.agregarAlCarrito = function(producto) { 
       this.compra.push(producto)
       localStorage.setItem("carrito", JSON.stringify(this.compra));
    }
    this.tomarDatosIniciales = function() {
        if(localStorage.getItem('carrito') != null){
            this.compra = JSON.parse(sessionStorage.getItem('carrito'))
        } 
    }
}
class Producto{
    constructor(marca,categoria,precio,foto){
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
        this.img = foto;
    }
}
//productos: ron
var productoRon1 = new Producto('Appleton estate','Signature blend',5.000,"img/appleton-estate-signature-blend.jpeg");
var productoRon2 = new Producto('Bacardi','Black Rum',4.000,"img/bacardi-black-rum.jpg");
var productoRon3 = new Producto('Bacardi','Coconut',1.300,"img/bacardi-coconut.jpeg");
var productoRon4 = new Producto('Bacardi','Dragon berry',2.300,"img/bacardi-dragon-berry.jpeg");
var productoRon5 = new Producto('Bacardi','Gold',4.000,"img/bacardi-gold.jpeg");
var productoRon6 = new Producto('Bacardi','Superior',5.400,"img/bacardi-superior-rum.jpeg");
var productoRon7 = new Producto('Brugal','1888',6.700,"img/Brugal-1888.jpg");
var productoRon8 = new Producto('Brugal','Añejo',8.000,"img/brugal-anejo.jpg");
var productoRon9 = new Producto('Brugal','Extra Viejo',12.000,"img/Brugal-extra-viejo-rum.jpg");
var productoRon10 = new Producto('Bumbu','Original',4.200,"img/bumbu-original.jpeg");
var productoRon11 = new Producto('Captain Morgan','100 Proof Spiced Rum',3.900,"img/captain-morgan-100-proof-spiced-rum.jpeg");
var productoRon12 = new Producto('Captain Morgan','Black Spiced',7.000,"img/Captain-morgan-black-spiced-rum.jpeg");
var productoRon13 = new Producto('Captain Morgan','Orange Vanilla Twist',2.300,"img/captain-morgan-orange-vanilla-twist.jpg");
var productoRon14 = new Producto('Captain Morgan','White Rum',1.600,"img/captain-morgan-white-rum.jpeg");
var productoRon15 = new Producto('Diplomatico','Reserva Exclusiva',14.800,"img/diplomatico-rum-reserva-exclusiva.jpg");
var productoRon16 = new Producto('Flor de Caña','Centenario 12 años',13.200,"img/flor-de-cana-centenario-12-year.jpeg");
var productoRon17 = new Producto('Goslings','Black seal rum',3.900,"img/goslings-black-seal-rum.jpeg");
var productoRon18 = new Producto('Havana Club','Añejo Blanco',3.200,"img/havana-club-anejo- blanco.jpeg");
var productoRon19 = new Producto('Havana Club','Añejo Clasico',2.200,"img/Havana-club-anejo-clasico.jpeg");
var productoRon20 = new Producto('Malibu','Original coconut',1.400,"img/malibu-original-coconut-rum.jpeg");
var productoRon21 = new Producto('Ron Zacapa','Centenario 23 años',15.400,"img/ron-zacapa-centenario-23-year.jpeg");
var productoRon22 = new Producto('The Kracken','Black spiced',3.400,"img/the-kraken-black-spiced-rum.jpg");
var productoRon23 = new Producto('Black Mamba','Spiced rum',2.100,"img/black-mamba-spiced-rum.jpeg");
var productoRon24 = new Producto('Captain Morgan','1671',5.400,"img/captain-morgan-1671-spiced-rum.jpeg");
var productoRon25 = new Producto('Stolen','Smoaked rum',3.000,"img/stolen-coffee-cigarettes-spiced-rum.jpeg");

//productos: Gin
var productoGin1 = new Producto('Beefeater','London Dry Gin',2.100,"img/beefeater-london-dry-gin.jpeg");
var productoGin2 = new Producto('Bombay','Original Dry Gin',3.300,"img/bombay-dry-gin.jpg");
var productoGin3 = new Producto('Alkkemist','Dry Gin',1.100,"img/alkkemist-gin.jpeg");
var productoGin4 = new Producto('Beefeater','24',1.800,"img/beefeater-24-gin.jpeg");
var productoGin5 = new Producto('Beefeater','pink London Dry Gin',2.300,"img/beefeater-pink-london-dry-gin.jpeg");
var productoGin6 = new Producto('Bombay','sapphire',3.150,"img/bombay-sapphire.jpeg");
var productoGin7 = new Producto('Bombay','Sapphire East',3.000,"img/bombay-sapphire-east.jpeg");
var productoGin8 = new Producto('Brooklin','Dry Gin',1.000,"img/brooklyn-gin.jpeg");
var productoGin9 = new Producto('Bulldog','London Dry Gin',2.000,"img/bulldog-london-dry-gin.jpg");
var productoGin10 = new Producto('D. George Benhams','Sonoma Dry Gin',1.900,"img/D-george-benhams-sonoma-dry-gin.jpg");
var productoGin11 = new Producto('Gordons','london Dry Gin',1.000,"img/gordons-london-dry-gin.jpeg");
var productoGin12 = new Producto('Green hat','Navy strength Gin',1.800,"img/green-hat-navy-strength-gin.jpeg");
var productoGin13 = new Producto('Hendricks','Dry Gin',2.600,"img/hendricks-gin-.jpeg");
var productoGin14 = new Producto('Hendricks','Midsummer solstice',2.800,"img/hendricks-midsummer-solstice.jpeg");
var productoGin15 = new Producto('Joseph Magnus Vigilant','Gin',1.200,"img/joseph-magnus-vigilant-gin.jpg");
var productoGin16 = new Producto('N° 209','kosher for passover',2.900,"img/no-209-kosher-for-passover-gin.jpg");
var productoGin18 = new Producto('Pickerings','Navy strength gin',3.200,"img/pickerings-navy-strength-gin.jpeg");
var productoGin19 = new Producto('Skol','Gin',1.200,"img/skol-gin.jpg");
var productoGin20 = new Producto('Tanqueray','London Dry Gin',2.200,"img/tanqueray.jpeg");
var productoGin21 = new Producto('Tanqueray','Flor de Sevilla',2.400,"img/tanqueray-flor-de-sevilla.jpeg");
var productoGin22 = new Producto('Tanqueray','Malacca',2.400,"img/tanqueray-malacca-gin.jpeg");
var productoGin23 = new Producto('Tanqueray','N°10',2.600,"img/tanqueray-no-ten-gin.jpeg");
var productoGin24 = new Producto('Tanqueray','Old Tom',2.600,"img/tanqueray-old-tom-gin.jpeg");
var productoGin25 = new Producto('Tanqueray','Rangpur',2.800,"img/tanqueray-rangpur-gin.jpeg");
//productos: Whiskey
var productoWhiskey1 = new Producto("Jack Daniel's",'Rye Tennessee',5.000,"img/ci-jack-daniels-tennessee-rye-a93eddbe0262870f.jpeg");
var productoWhiskey2 = new Producto('Chivas Regal','12 years',4.000,"img/chivas-regal-12-year.jpeg");
var productoWhiskey3 = new Producto("Jack Daniel's",'Legacy Edition',6.000,"img/ci-jack-daniels-legacy-edition-b6b7992c4dfd778b.jpeg");
var productoWhiskey4 = new Producto("Jack Daniel's",'Master Distiller',10.00,"img/ci-jack-daniels-tennessee-rye-a93eddbe0262870f.jpeg");
var productoWhiskey5 = new Producto("Jack Daniel's",'Old N°7',1800,"img/ci-jack-daniels-old-no-7-.jpeg");
var productoWhiskey6 = new Producto("Jack Daniel's",'Red dog saloon',5000,"img/ci-jack-daniels-red-dog-saloon.jpeg");
var productoWhiskey7 = new Producto("Jack Daniel's",'White Rabbit',5000,"img/ci-jack-daniels-white-rabbit.jfif");
var productoWhiskey8 = new Producto("Jack Daniel's",'150th Anniversary',1300,"img/jack-daniels-150th-anniversary-whiskey-.jfif");
var productoWhiskey9 = new Producto('Johnnie walker','Black Label',2000,"img/ci-johnnie-walker-black-label.jpeg");
var productoWhiskey10 = new Producto('Johnnie walker','Red Label',1200,"img/ci-johnnie-walker-red-label.jpeg");
var productoWhiskey11 = new Producto('Johnnie walker','Jane walker 10 years',3900,"img/jane-walker-by-johnnie-walker-10-year.jfif");
var productoWhiskey12 = new Producto('Johnnie walker','A song of fire',4000,"img/johnnie-walker-a-song-of-fire.jpeg");
var productoWhiskey13 = new Producto('Johnnie walker','A song of ice',4000,"img/johnnie-walker-a-song-of-ice.jpeg");
var productoWhiskey14 = new Producto('Johnnie walker','Aged 18 years',4600,"img/johnnie-walker-aged-18-years.jpeg");
var productoWhiskey15 = new Producto('Johnnie walker','Blue Label',5800,"img/johnnie-walker-blue-label.jfif");
var productoWhiskey16 = new Producto('Johnnie walker','Double Black',3200,"img/johnnie-walker-double-black-label.jfif");
var productoWhiskey18 = new Producto('Johnnie walker','Gold Label',2900,"img/johnnie-walker-gold-label-reserve.jpeg");
var productoWhiskey19 = new Producto('Johnnie walker','Gold',1200,"img/johnnie-walker-green-label.jpeg");
var productoWhiskey20 = new Producto('Johnnie walker','Platinum Label',4200,"img/johnnie-walker-platinum-label.jpeg");
var productoWhiskey21 = new Producto('Johnnie walker','White Label',4000,"img/johnnie-walker-white-walker.jpeg");


var ron = [productoRon1,productoRon2,productoRon3,productoRon4,productoRon5,productoRon6,productoRon7,productoRon8,productoRon9,productoRon10,productoRon11,productoRon12,productoRon13,productoRon14,productoRon15,productoRon16,productoRon17,productoRon18,productoRon19,productoRon20,productoRon21,productoRon22,productoRon23,productoRon24,productoRon25];
var gin = [productoGin1,productoGin2,productoGin3,productoGin4,productoGin5,productoGin6,productoGin7,productoGin8,productoGin9,productoGin10,productoGinR11,productoGin12,productoGin13,productoGin14,productoGin5,productoGin16,productoGin17,productoGin18,productoGin19,productoGin20,productoGin21,productoGin22,productoGin23,productoGin24,productoGin25];
var whiskey = [productoWhiskey1,productoWhiskey2,productoWhiskey3,productoWhiskey4,productoWhiskey5,productoWhiskey6,productoWhiskey7,productoWhiskey8,productoWhiskey9,productoWhiskey10,productoWhiskey11,productoWhiskey12,productoWhiskey13,productoWhiskey14,productoWhiskey14,productoWhiskey15,productoWhiskey16,productoWhiskey17,productoWhiskey18,productoWhiskey19.productoWhiskey20,productoWhiskey21];


