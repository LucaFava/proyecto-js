// PRODUCTOS
// PRODUCTOS
const productos = [
    {
        id: "casaca1",
        imagen: "./img/casaca celtics retro bir.webp",
        nombre: "CASACA CELTICS RETRO",
        precio: 18000,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca2",
        imagen: "./img/casaca city edition celtics.webp",
        nombre: "CASACA CELTICS CITY EDITION",
        precio: 19000,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca3",
        imagen: "./img/casaca bulls retro clasica.webp",
        nombre: "CASACA BULLS RETRO CLÁSICA",
        precio: 19000,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca4",
        imagen: "./img/casaca miami classic edition.webp",
        nombre: "CASACA MIAMI CLASSIC EDITION",
        precio: 17000,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca5",
        imagen: "./img/casaca piston retro rodman.webp",
        nombre: "CASACA PISTON RETRO RODMAN",
        precio: 20000,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca6",
        imagen: "./img/casaca raptors.webp",
        nombre: "CASACA TORONTO RAPTORS",
        precio: 16000,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca7",
        imagen: "./img/casaca sixers inverson.webp",
        nombre: "CASACA 76ERS INVERSON",
        precio: 19500,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca8",
        imagen: "./img/casaca piston classic edition.webp",
        nombre: "CASACA PISTON CLASSIC EDITION",
        precio: 19500,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca9",
        imagen: "./img/casaca spurs ginobili.webp",
        nombre: "CASACA SPURS GINOBILI",
        precio: 17500,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca10",
        imagen: "./img/casaca statement edition warriors.webp",
        nombre: "CASACA STATEMENT EDITION WARRIORS",
        precio: 17500,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca11",
        imagen: "./img/casaca suns statement edition.webp",
        nombre: "CASACA STATEMENT EDITION SUNS",
        precio: 18100,
        categoria: "casaca",
        cantidad: 1,
    },
    {
        id: "casaca12",
        imagen: "./img/casaca oneal.webp",
        nombre: "CASACA LAKERS O'NEAL",
        precio: 22100,
        categoria: "casaca",
        cantidad: 1,
    },
    // ZAPATILLAS
    {
        id: "zapatilla1",
        imagen: "./img/zapatillas/air jordan7 retro.webp",
        nombre: "AIR JORDAN 7 RETRO",
        precio: 50000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla2",
        imagen: "./img/zapatillas/dame8.webp",
        nombre: "DAME 8",
        precio: 40000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla3",
        imagen: "./img/zapatillas/freak4.webp",
        nombre: "FREAK 4",
        precio: 55000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla4",
        imagen: "./img/zapatillas/harden stepback3.webp",
        nombre: "HARDEN STEPBACK 3",
        precio: 40000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla5",
        imagen: "./img/zapatillas/harden volumen7.webp",
        nombre: "HARDEN VOLUME 7",
        precio: 40000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla6",
        imagen: "./img/zapatillas/kd15.webp",
        nombre: "KD15",
        precio: 60000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla7",
        imagen: "./img/zapatillas/lebron 19.webp",
        nombre: "LEBRON 19",
        precio: 100000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla8",
        imagen: "./img/zapatillas/lebron 20.webp",
        nombre: "LEBRON NXXT",
        precio: 110000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla9",
        imagen: "./img/zapatillas/trae unlimited.webp",
        nombre: "TRAE UNLIMITED SHOES",
        precio: 70000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla10",
        imagen: "./img/zapatillas/zapa air jordan12 retro.webp",
        nombre: "AIR JORDAN 12 RETRO",
        precio: 90000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    {
        id: "zapatilla11",
        imagen: "./img/zapatillas/zapa jumpman two trey.webp",
        nombre: "JUMPMAN TWO TREY",
        precio: 60000,
        categoria: "zapatilla",
        cantidad: 1,
    },
    // SHORTS
    {
        id: "short1",
        imagen: "./img/shorts/short blazers.webp",
        nombre: "SHORT BLAZERS",
        precio: 16000,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short2",
        imagen: "./img/shorts/short bulls negro.webp",
        nombre: "SHORT BULLS NEGRO",
        precio: 18000,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short3",
        imagen: "./img/shorts/short knicks.webp",
        nombre: "SHORT KNICKS",
        precio: 16000,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short4",
        imagen: "./img/shorts/short lakers.webp",
        nombre: "SHORT LAKERS",
        precio: 18500,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short5",
        imagen: "./img/shorts/short mamba edition.webp",
        nombre: "SHORT LAKERS MAMBA EDITION",
        precio: 20500,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short6",
        imagen: "./img/shorts/short memphis retro.webp",
        nombre: "SHORT MEMPHIS RETRO",
        precio: 17500,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short7",
        imagen: "./img/shorts/short miami.webp",
        nombre: "SHORT MIAMI",
        precio: 17000,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short8",
        imagen: "./img/shorts/short orlando retro.webp",
        nombre: "SHORT ORLANDO RETRO",
        precio: 17500,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short9",
        imagen: "./img/shorts/short raptors.webp",
        nombre: "SHORT RAPTORS",
        precio: 16000,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short10",
        imagen: "./img/shorts/short sixers negro.webp",
        nombre: "SHORT SIXERS NEGRO",
        precio: 17000,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short11",
        imagen: "./img/shorts/short suns retro.webp",
        nombre: "SHORT SUNS RETRO",
        precio: 16500,
        categoria: "short",
        cantidad: 1,
    },
    {
        id: "short12",
        imagen: "./img/shorts/short suns.webp",
        nombre: "SHORT SUNS",
        precio: 16000,
        categoria: "short",
        cantidad: 1,
    },
]
// -----------------------------

// DIBUJAR PRODUCTOS

const sectionProd = document.querySelector(".productos")


cargarProductos()
function cargarProductos() {

    productos.forEach((producto)=>{
        const articleProd = document.createElement ("article")
        articleProd.classList.add("card")
        articleProd.innerHTML = `
        <article class="card">
        <div class="img-card">
            <img src="${producto.imagen}" alt="productos">
        </div>
        <div class="nombre-card">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        </div>
        <div class="boton">
            <button id="${producto.id}"><i class="bi bi-cart-plus-fill"></i></button>
        </div>
    </article>`
       sectionProd.appendChild (articleProd)
    })
}



// FUNCIONES DE FILTRADO



function filtrarProductos(categoria) {
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)
   sectionProd.innerHTML = ""
    productosFiltrados.forEach((producto)=>{
        const articleProd = document.createElement ("article")
        articleProd.classList.add("card")
        articleProd.innerHTML = `
        <article class="card">
           <div class="img-card">
                <img src="${producto.imagen}" alt="productos">
            </div>
            <div class="nombre-card">
                <h3>${producto.nombre}</h3>
                 <p>$${producto.precio}</p>
            </div>
            <div class="boton">
                <button id="${producto.id}"><i class="bi bi-cart-plus-fill"></i></button>
            </div>
        </article>
        `
        sectionProd.appendChild(articleProd)
    })
    
}
filtrarProductos()

// MOSTRAR TODOS

function mostrarTodos (){
    return (cargarProductos())
}

// AGREGAR AL CARRITO