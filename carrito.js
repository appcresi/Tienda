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

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarcarrito() {
        let enlaces = document.getElementById("tablacarrito");
        for (const productocarrito of productocarritos) {
            let lista = document.createElement("tr");
            lista.id = `${productocarrito.id}`;
            lista.innerHTML = `
                <td><img src="${productocarrito.urlImagen}" width="50"></td>
                <td>${productocarrito.cantidad}</td>
                <td>${productocarrito.nombre}</td>
                <td>${productocarrito.precio}</td>
                <td>${productocarrito.cantidad * productocarrito.precio}</td>
                <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">x</button></td>
            `;
            enlaces.appendChild(lista);
        }
   
}
cargarcarrito();

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    id = parseInt(id)
    productosActualizados = productocarritos.filter(producto => producto.id !== id);
    const enJSON    = JSON.stringify(productosActualizados);
    localStorage.setItem("carrito", enJSON)
}
