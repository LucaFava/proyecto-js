const carrito = JSON.parse(localStorage.getItem("carrito"))
console.log(carrito);

const contenedorCarrito = document.querySelector("#carrito-contenedor")

const carritoVacio = document.querySelector("#carrito-vacio")

const articleProductos = document.querySelector(".productos-agregados")

const precioTotal = document.querySelector(".precio-final")
console.log(precioTotal);

const vaciar = document.querySelector("#vaciar")

const total = document.querySelector(".total")

const articlePrecio = document.querySelector(".article-precio")

const comprar = document.querySelector("#comprar")



cargarCarrito()
function cargarCarrito() {
    if (carrito.length >= 1) {
        carritoVacio.classList.add("inactivo")
        contenedorCarrito.classList.remove("inactivo")
        contenedorCarrito.classList.add("carrito-contenedor")
        carrito.forEach(producto => {
            const divCard = document.createElement("div")
            
            divCard.classList.add("card-agregados")
            divCard.innerHTML = `
            
                <div class="img-agregados">
                    <img src="${producto.imagen}" alt="producto agregado">
                    <p>${producto.nombre}</p>
                </div>
                <div class="cantidad">
                    <h2>Cantidad</h2>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="precio">
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <div class="boton-eliminar" id="${producto.id}">
                    <button ><i class="bi bi-x-circle-fill"></i></button>
                </div>
            `
        articleProductos.append(divCard)
        });
    } else {
        carritoVacio.classList.remove("inactivo")
        contenedorCarrito.classList.remove("carrito-contenedor")
        contenedorCarrito.classList.add("inactivo")
        precioTotal.classList.remove("precio-final")
        precioTotal.classList.add("inactivo")
    }
    botonesEliminarActualizar()
    precioFinal()
}






let botonesEliminar = document.querySelectorAll(".boton-eliminar")
console.log(botonesEliminar);

function botonesEliminarActualizar() {
    const botonesEliminar = document.querySelectorAll(".boton-eliminar");

    botonesEliminar.forEach((boton)=>{
        boton.addEventListener("click", eliminarProd)
    
    })
}


// FUNCION ELIMINAR
function eliminarProd(e) {
  
    let idBotonEliminar = e.currentTarget.id
const indexEliminado = carrito.findIndex(producto => producto.id === idBotonEliminar)
console.log(indexEliminado);

    if (indexEliminado > -1) {
        carrito.splice(indexEliminado,0)
    }
    // cargar de nuevo los productos con su funcion ya hecha
    cargarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
}

// vaciar carrito

vaciar.addEventListener("click",vaciarCarrito)


function vaciarCarrito() {
    carrito.length = 0
    localStorage.setItem("carrito", JSON.stringify(carrito))

    Toastify({
        text: "Vaciaste el carrito",
        duration: 3000,
        destination: "",
        newWindow: false,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    cargarCarrito()

}

// total
function precioFinal() {
    const totalProductos = carrito.reduce((accum, producto) => accum + (producto.precio * producto.cantidad),0)

    const divTotal = document.createElement("div")
    divTotal.classList.add("total")
    divTotal.innerHTML=`
    <h4>Total a pagar:</h4>
    <p>$${totalProductos}</p>`
    articlePrecio.appendChild(divTotal)
}

// comprar

comprar.addEventListener("click", comprarProd)

function comprarProd() {
    carrito.length = 0
    localStorage.setItem("carrito", JSON.stringify(carrito))
    Swal.fire(
        'Muchas Gracias!',
        'Regresa Pronto!',
        'success'
      )
      cargarCarrito()
}