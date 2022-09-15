alert ("Bienvenido a nuestro espacio de Armonía");
let clientes=[];
let productos=[];
let compras=[];

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
let nuevoCliente=new cliente(clientes.length,nombre,apellido);
clientes.push(nuevoCliente);

let velas=new producto(productos.length+1,"Velas",200);
productos.push(velas);
let aceite=new producto(productos.length+1,"Aceite Escenciales",300);
productos.push(aceite);
let lampara=new producto(productos.length+1,"Lamparas de Sal",800);
productos.push(lampara);
let jabon=new producto(productos.length+1,"Jabones",100);
productos.push(jabon);

let texto="Elija una opcion de la variedad de productos: ";
for (let index = 0; index < productos.length; index++) {
    texto += productos[index].id + " - " +productos[index].descripcion + " | ";
}

let option = prompt(texto);
calcularCompras (Number(option));

function calcularCompras (option) {
    let cantidad = 0;
    let productoBuscado=buscarProducto(option); 
    if(productoBuscado!=null){
        alert ("el costo de " +productoBuscado.descripcion + " es de $"+productoBuscado.precio +" cada una"); 
        cantidad = prompt("Indique la cantidad que desea comprar");
        if (Number(cantidad)>0 ){
            alert (nuevoCliente.nombre + " " +nuevoCliente.apellido + " el costo total de su compra es: $ "+calcularCostoTotal(productoBuscado.precio,Number(cantidad)));
            let nuevaCompra = new compra(nuevoCliente,productoBuscado,cantidad);
            compras.push(nuevaCompra);
        } else {
            alert ("debe seleccionar al menos un producto")
        }
    } else{
        alert ("la opcion elegida no es valida")
    }
}

function calcularCostoTotal (precio,cantidad){
    return precio * cantidad * 1.22;

}

function cliente (id, nombre, apellido){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
}
function producto(id,descripcion, precio){
    this.id=id;
    this.descripcion=descripcion;
    this.precio=precio;
}
function compra(cliente,producto,cantidad){
    this.cliente=cliente;
    this.producto=producto;
    this.cantidad=cantidad;
}
function buscarProducto(id){
    for (let index = 0; index < productos.length; index++) {
        if(productos[index].id==id)
            return productos[index];
    }
}
