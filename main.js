
// CALZADO (primero nombrar todos los productos en un array)
const zapatillas = [
    {
        id:"kd15",
        titulo: "NIKE KD15",
        imagen: "../img/kd15.webp",
        precio: 72000,
    },
    {
        id:"lebron20",
        titulo: "LEBRON 20 NXXT",
        imagen: "../img/Lebron 20 NXXT.webp",
        precio: 102000,
    },
    {
        id:"freak3",
        titulo: "GIANNIS FREAK 3",
        imagen: "../img/Giannis Freak 3.webp",
        precio: 60000,
    },
    {
        id:"harden7",
        titulo: "ADIDAS HARDEN 7",
        imagen: "../img/Harden 7.webp",
        precio: 65000,
    },
    {
        id:"trae2",
        titulo: "TRAE YOUNG 2.0",
        imagen: "../img/trae young 2.0.webp", 
        precio: 68000,
    },
    {
        id:"dame8",
        titulo: "ADIDAS DAME 8",
        imagen: "../img/Dame 8.webp",
        precio: 63000,
    },
    {
        id:"curry9",
        titulo: "CURRY 9",
        imagen: "../img/curry 9.jpeg",
        precio: 70000,
    },
    {
        id:"curry10",
        titulo: "CURRY 10",
        imagen: "../img/curry 10 double bang.webp",
        precio: 80000,
    },
    {
        id:"tatum1",
        titulo: "TATUM 1",
        imagen: "../img/tatum 1.webp",
        precio: 62000,
    },
    {
        id:"lamelo1.0",
        titulo: "MB 1.0 LAMELO",
        imagen: "../img/MB 1.0 lamelo.webp",
        precio: 75000,
    },
]
// seleccionar en el dom el contenedor del html, luego agregar las cards con un innerhtml
const contenedor = document.querySelector(".contenedor-productos")

// FUNCION PARA MOSTRAR LOS PRODUCTOS USANDO FOREACH

function cargarzapatillas() {
    zapatillas.forEach((zapatilla)=>{
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `   
        <img src="${zapatilla.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${zapatilla.titulo}</h3>
          <p class="card-text">$${zapatilla.precio}</p>
          <button class="btn btn-primary" id="${zapatilla.id}">Agregar al carrito</button>
        </div>`;
      contenedor.append(div)
    })
}
cargarzapatillas()

// LLAMAR A LOS BOTONES DE AGREGAR

function botonesEvento() {
    const botonesAgregar = document.querySelectorAll(".btn")
    console.log(botonesAgregar)
    botonesAgregar.forEach((boton)=>{
        boton.addEventListener("click",agregarcarrito)
    })
}
botonesEvento()

// AGREGAR AL CARRITO
let carrito;
const productosencarritoLS = localStorage.getItem("carrito")
if (productosencarritoLS) {
    carrito = JSON.parse (productosencarritoLS)
} else {
    carrito = []
}


function agregarcarrito (e){
    const id = e.currentTarget.id;
    // agregar un find para que encuentre el primer elemento que coincida con el id del boton, para que al elegir 2 veces el mismo producto se sume
    const zapatillaAgregada = zapatillas.find(zapatilla => zapatilla.id === id);

    if (carrito.some(zapatilla => zapatilla.id === id)){
        const i = carrito.findIndex(zapatilla => zapatilla.id === id)
        carrito[i].cantidad++
        console.log(i)
    } else {
        zapatillaAgregada.cantidad = 1
        carrito.push(zapatillaAgregada)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
}