let productosencarrito = (localStorage.getItem("carrito"))
productosencarrito = JSON.parse(productosencarrito);


const carritovacio = document.querySelector(".carrito-vacio")
const contenedor = document.querySelector(".contenedor-carrito")
const contenedorProductos = document.querySelectorAll(".contenedor-productos")
const contenedorBotones = document.querySelector(".botones")
const boton1 = document.querySelector("#comprar")
const boton2 = document.querySelector("#vaciar")
const contenedorTotal = document.querySelector(".total")
const comprado = document.querySelector(".comprado")



cargarcarrito()
function cargarcarrito() {
    if (productosencarrito && productosencarrito.length > 0) {
        carritovacio.classList.add("disable")
        contenedor.classList.remove("disable")
        contenedorBotones.classList.remove("disable")
    
        contenedor.innerHTML =""
    
        productosencarrito.forEach(zapatilla=>{
            const div = document.createElement("div")
            div.innerHTML = `<section class="contenedor-carrito">
            <article class="contenedor-producto">
                <div class="img">
                    <img src="${zapatilla.imagen}" alt="${zapatilla.titulo}">
                </div>
                <div class="titulo">
                    <p>Nombre</p>
                    <h2>${zapatilla.titulo}</h2>
                </div>
                <div class="precio">
                    <p>Precio</p>
                    <h2>$${zapatilla.precio}</h2>
                </div>
                <div class="icono-remover">
                    <button class="btn" id="${zapatilla.id}"><i class="bi bi-trash"></i></button>
                </div>
            </article>
        </section>`
    
        contenedor.append(div)
        })
        
    } else{
         carritovacio.classList.remove("disable")
         contenedor.classList.add("disable")
         contenedorBotones.classList.add("disable")
    }

    botonesEventoEliminar()
    total()
}




function botonesEventoEliminar() {
    const botonesEliminar = document.querySelectorAll(".btn")
    // console.log(botonesEliminar)

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click",eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    let id = e.currentTarget.id;
    const index = productosencarrito.findIndex(zapatilla => zapatilla.id === id)
    productosencarrito.splice(index, 1);
    cargarcarrito()

    localStorage.setItem("carrito", JSON.stringify(productosencarrito))
}


// EVENTO VACIAR Y TOTAL
boton2.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
    productosencarrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(productosencarrito));
    cargarcarrito()
}

function total() {
    let totalcalculado = productosencarrito.reduce((acum, zapatilla) => acum + (zapatilla.precio), 0)
    contenedorTotal.innerHTML = `
    <h3>TOTAL</h3>
    <p>$${totalcalculado}</p>`  
}
// ------------------------------------------

// EVENTO DE COMPRAR
boton1.addEventListener("click", comprar)

function comprar() {
    productosencarrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(productosencarrito));
    
    carritovacio.classList.add("disable")
    contenedor.classList.add("disable")
    contenedorBotones.classList.add("disable")
    comprado.classList.remove("disable")

}