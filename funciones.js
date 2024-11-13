const menus = [{nombre: "Inicio", url: "index.html"},
            {nombre: "¿Quienes somos?", url: "quienes.html"},
            {nombre: "Contacto", url: "contacto.html"},
            {nombre: "Carrito", url: "carrito.html"},
]

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu")
    for (const menu of menus) {
        let lista = document.createElement("li")
        lista.innerHTML =`<a href=${menu.url}>${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}
cargarmenu() 

const productos = [
    { 
      id: 1,
      nombre: "Lavadora Samsung",
      urlImagen: "img/lavadora.webp",
      precio: 50000,
      descripcion: "Lavadora automática con capacidad de 10 kg y tecnología de ahorro de agua.",
      stock: 15
    },
    {
      id: 2,
      nombre: "Refrigerador LG",
      urlImagen: "img/refrigerador.webp",
      precio: 90000,
      descripcion: "Refrigerador no frost de 500 litros con compresor inverter.",
      stock: 8
    },
    {
      id: 3,
      nombre: "Microondas Whirlpool",
      urlImagen: "img/microondas.jpg",
      precio: 25000,
      descripcion: "Microondas digital de 20 litros con grill y descongelado rápido.",
      stock: 25
    },
    {
      id: 4,
      nombre: "Aspiradora Dyson",
      urlImagen: "img/aspiradora.webp",
      precio: 60000,
      descripcion: "Aspiradora inalámbrica con tecnología ciclónica y potencia ajustable.",
      stock: 12
    },
    {
      id: 5,
      nombre: "Televisor Sony 55 pulgadas",
      urlImagen: "img/televisor.avif",
      precio: 120000,
      descripcion: "Televisor 4K Ultra HD con panel OLED y HDR.",
      stock: 7
    },
    {
      id: 6,
      nombre: "Cafetera Nespresso",
      urlImagen: "img/cafetera.jfif",
      precio: 15000,
      descripcion: "Cafetera de cápsulas con sistema de calentamiento rápido.",
      stock: 30
    },
    {
      id: 7,
      nombre: "Plancha Philips",
      urlImagen: "img/plancha.webp",
      precio: 8000,
      descripcion: "Plancha de vapor con suela cerámica y apagado automático.",
      stock: 20
    },
    {
      id: 8,
      nombre: "Horno eléctrico Teka",
      urlImagen: "img/horno.webp",
      precio: 45000,
      descripcion: "Horno eléctrico empotrable con función de convección y limpieza automática.",
      stock: 10
    },
    {
      id: 9,
      nombre: "Licuadora Oster",
      urlImagen: "img/licuadora.webp",
      precio: 12000,
      descripcion: "Licuadora de 600W con jarra de vidrio y cuchillas de acero inoxidable.",
      stock: 18
    },
    {
      id: 10,
      nombre: "Ventilador de pie Liliana",
      urlImagen: "img/ventilador.jpg",
      precio: 5000,
      descripcion: "Ventilador de pie con 3 velocidades y oscilación.",
      stock: 40
    }
  ];
  
  function cargarproductos() {
    let enlaces = document.getElementById("boxproductos")
    for (const producto of productos) {
        let lista = document.createElement("div")
        lista.innerHTML =`  <h3>${producto.nombre}</h3>
                            <img src=${producto.urlImagen} alt="" width="100">
                            <p>${producto.precio}</p>
                            <button onclick="verdetalle('${producto.id}')">Detalles</button>
                        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  const enJSON    = JSON.stringify(buscarProducto);
  localStorage.setItem("detalleproducto", enJSON)
  window.location.href="detalle.html"
}


