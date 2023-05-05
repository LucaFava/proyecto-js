// // VARIABLES
// const casacalakers = 20000
// const kobe6 = 35000
// const shortorlando = 15000
// const casacabulls = 25000

const casacas = [
    {nombre: "Casaca Lakers #6", precio: 15000},
    {nombre: "Casaca Warriors #30", precio: 15000},
    {nombre: "Casaca Celtics #0", precio: 12000},
    {nombre: "Casaca Bulls retro MJ", precio: 20000},
    {nombre: "Casaca Lakers retro Kobe", precio: 20000},
]

const zapatillas = [
    {nombre: "Nike Kobe 6 protro Grinch", precio: 100000},
    {nombre: "Nike Kobe 11", precio: 100000},
    {nombre: "Under Armour Curry 4", precio: 80000},
    {nombre: "Under Armour Curry 8", precio: 95000},
    {nombre: "LeBron Soldier XIX", precio: 90000},
]

const articulos = casacas.concat(zapatillas)
console.log(articulos)





let carrito = []



// // INICIA FUNCION

pedirdatos ()

function pedirdatos (){
    let nombre = prompt ("Ingrese su nombre completo")
    if (nombre != "") {
        alert (`Bienvenido a Jellys ${nombre}`)
    } else {
        alert ("faltan datos, intente de nuevo")
    }
    console.log (nombre)
    
}

// // COMPRA






compra()
function compra (){
    const opcion =  prompt("Tenemos en stock algunas casacas y algunas zapatillas, presione 1 para ver las casacas o presione 2 para ver las zapatillas")
switch (opcion) {
    case "1":
        let disponible = `Estas son nuestar casacas disponibles:\n`
        for (let i = 0; i < casacas.length; i++) {
            disponible += casacas[i].nombre + " $" + casacas[i].precio + "\n"
        }
        alert (disponible)
        compra2()
        break;
    case "2":
        let zapatillasstock = `Estas son nuestar zapatillas disponibles:\n`
        for (let i = 0; i < zapatillas.length; i++) {
            zapatillasstock += zapatillas[i].nombre + " $" + zapatillas[i].precio + "\n"
        }
        alert (zapatillasstock)
        compra2()
        break;

}
}

function compra2() {
    let decision = prompt ("Escriba el nombre completo del articulo que quiera comprar, en caso contraio escriba NO para volver al stock")
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].nombre === decision) {
            console.log (articulos[i])
            alert("Su articulo se agregó con exito")
            carrito.push (articulos[i])
            console.log (carrito)
        }
    }
    if (decision == "no") {
        compra()
    }
    compra3()
}

function compra3() {
    const pregunta = prompt ("Desea comprar algo más?")
    switch (pregunta) {
        case "si":
            compra2()
            break;
        case "no":
            alert("Ahora proseguiremos con el pago")
            pago1()
            break;
        pago1()
    }
}

function pago1() {
    let totalcarrito = carrito.reduce ((acumulado, articulos) => {
        return acumulado + articulos.precio;
    },0 )
    console.log(totalcarrito)
    let totalcarritoalert = `Carrito:\n`
    totalcarritoalert += "$" + totalcarrito
    alert(totalcarritoalert)
    confirmacion()
}
function confirmacion() {
    const confirmacion = prompt ("Desea confirmar la compra?") 
    switch (confirmacion) {
        case "si":
            alert (`Muchas Gracias por su compra, espero verlo nuevamente`)
            break;
        case "no":
            alert ("Gracias por su visita, espero que vuelva pronto")
            break;
    }
}



// PRE-ENTREGA 2

// arrays





// const accesorios = [
//     {nombre: "Vincha Nike", precio: 3000},
//     {nombre: "Manga Nike", precio: 4000},
//     {nombre: "Calza corto Under Armour", precio: 10000},
//     {nombre : "Calza Nike", precio: 12000},
// ]


// console.log(totalcarrito)



























// if (mostrar === "2") {
//     let disponible = "Zapatillas disponibles: \n"
//        for (let index = 0; index < zapatillas.length; index++) {
//     disponible += zapatillas[index].nombre + " $" + zapatillas[index].precio + "\n";
//    }
//    alert(disponible)
// }

// if (mostrar === "3") {
//     let disponible = "Accesorios disponibles: \n"
//        for (let index = 0; index < accesorios.length; index++) {
//     disponible += accesorios[index].nombre + " $" + accesorios[index].precio + "\n";
//    }
//    alert(disponible)
// }









// const elegir = prompt(` ¿Que desea comprar? Seleccione el número correspondiente
// 1_${casacas[0].nombre} : ${casacas[0].precio}
// 2_${casacas[1].nombre} : ${casacas[1].precio}
// 3_${casacas[2].nombre} : ${casacas[2].precio}
// 4_${casacas[3].nombre} : ${casacas[3].precio}
// 5_${casacas[4].nombre} : ${casacas[4].precio}`);

