// VARIABLES
const casacalakers = 20000
const kobe6 = 35000
const shortorlando = 15000
const casacabulls = 25000
// INICIA FUNCION

pedirdatos ()

function pedirdatos (){
    let nombre = prompt ("Ingrese su nombre")
    let apellido = prompt ("Ingrese su apellido")
    let nombrecompleto = `${nombre} ${apellido}`
    if (nombre != "" && apellido != "") {
        alert (`Bienvenido ${nombrecompleto}`)
    } else {
        alert ("faltan datos, intente de nuevo")
    }
    console.log (nombrecompleto)
}

// COMPRA

let total = 0

function compra (){
    const articulos = prompt (`¿Que articulo desea comprar? Seleccione el N° de el objeto:
    1_Casaca de Lakers $${casacalakers}
    2_Zapatillas Kobe6 $${kobe6}
    3_Shorts Orlando retro $${shortorlando}
    4_Casaca Chicago Bulls retro $${casacabulls}`)

    switch (articulos) {
        case "1":
            total += casacalakers
            break;
        case "2":
            total += kobe6
            break;
        case "3":
            total += shortorlando
            break;
        case "4":
            total += casacabulls
            break;
    }
    segundacompra()
}
compra()


function segundacompra (){
    const compra2 = prompt ("¿Desea comprar algo más?")

    if (compra2 == "si") {
        compra()
    }
    if (compra2 == "no"){
        alert(`Su total de compra es de $${total}`)
        pagar()
    }
}

function pagar(){
    let totalcuotas3 = total/3
    let totalcuotas6 = total/6
    const pago = prompt (`Como desea abonar su compra? Seleccione el N° de su elección:
    1_ Un solo pago
    2_ 3 coutas con 3% de recargo
    3_ 6 cuotas con 8% de recargo`)
    switch (pago){
        case "1":
            alert ("Muchas gracias por comprar, espero que vuelva pronto")
            break;
        case "2":
            alert (`Las cuotas seran de $${totalcuotas3.toFixed(2)} con un 3% de interes`)
            alert ("Muchas gracias por comprar, espero que vuelva pronto")
            break;
        case "3":
            alert (`Las cuotas seran de $${totalcuotas6.toFixed(2)} con un interes de 6%`)
            alert ("Muchas gracias por comprar, espero que vuelva pronto")
            break;
    }
}



