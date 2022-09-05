alert ("Bienvenido a nuestro espacio de Armonía");
let nombre = prompt ("Ingrese su nombre");

let option = prompt('Elija una opcion de la variedad de productos: 1. Velas 2. Aceites esenciales 3. Lamparas de Sal 4. Jabones');
calcularCompras (Number(option));

function calcularCompras (option) {
    let precio = 0;
    let cantidad = 0;
    switch (option) {
        case 1: 
            precio = 200;
            alert ("el costo de las velas es de $"+precio +" cada una"); 
            cantidad = prompt("Indique la cantidad que desea comprar");
            if (Number(cantidad)>0 ){
                alert (nombre + " el costo total de su compra es: $ "+calcularCostoTotal(precio,Number(cantidad)))
            } else {
                alert ("debe seleccionar al menos un producto")
            }
            
        break; 
        case 2:
            precio = 300;
            alert ("el costo de los Aceites es de $"+precio +" cada uno"); 
            cantidad = prompt("Indique la cantidad que desea comprar");
            if (Number(cantidad)>0 ){
                alert (nombre +" el costo total de su compra es: $ "+calcularCostoTotal(precio,Number(cantidad)))
            } else {
                alert ("debe seleccionar al menos un producto")
            }
        break; 
        case 3:             
            precio = 800;
            alert ("el costo de las Lamparas es de $"+precio +" cada una"); 
            cantidad = prompt("Indique la cantidad que desea comprar");
            if (Number(cantidad)>0 ){
                alert (nombre +" el costo total de su compra es: $ "+calcularCostoTotal(precio,Number(cantidad)))
            } else {
                alert ("debe seleccionar al menos un producto")
            }
        break;
        case 4:   
            precio = 100;
            alert ("el costo de los Jabones es de $"+precio +" cada uno"); 
            cantidad = prompt("Indique la cantidad que desea comprar");
            if (Number(cantidad)>0 ){
                alert (nombre +"  el costo total de su compra es: $ "+calcularCostoTotal(precio,Number(cantidad)))
            } else {
                alert ("debe seleccionar al menos un producto")
            }
        break;  
        default: alert ("la opcion elegida no es valida")
        break;  
    }
}

function calcularCostoTotal (precio,cantidad){
    return precio * cantidad * 1.22;

}
