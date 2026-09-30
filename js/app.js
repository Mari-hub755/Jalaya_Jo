// ========================================
// MOSTRAR PRODUCTOS
// ========================================

// Seleccionamos el contenedor del HTML
const contenedorProductos = document.getElementById("productos-container");


// ========================================
// FUNCIÓN PARA MOSTRAR LOS PRODUCTOS
// ========================================

function mostrarProductos() {

    // Limpiamos el contenedor
    contenedorProductos.innerHTML = "";

    // Recorremos todos los productos
    productos.forEach(producto => {

        // Creamos una tarjeta
        const tarjeta = document.createElement("div");

        // Le agregamos la clase CSS
        tarjeta.classList.add("producto-card");

        // Agregamos el contenido de la tarjeta
        tarjeta.innerHTML = `
            
            <!-- Imagen principal del producto -->
            <img 
                src="${producto.imagenes[0]}" 
                alt="${producto.nombre}"
                class="imagen-producto"
                onclick="abrirZoom(${producto.id}, 0)"
            >

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcionCorta}</p>

            <p class="precio">
                $${producto.precio.toLocaleString("es-AR")}
            </p>

            <button 
                class="boton-agregar" 
                onclick="agregarAlCarrito(${producto.id})">
                Agregar al carrito
            </button>
        `;

        // Agregamos la tarjeta al contenedor
        contenedorProductos.appendChild(tarjeta);
    });
}


// ========================================
// ZOOM DE IMÁGENES
// ========================================

// Variable para saber qué imagen estamos viendo
let imagenActual = 0;

// Variable para saber qué producto estamos viendo
let productoActual = null;


// Función para abrir el zoom
function abrirZoom(idProducto, indiceImagen) {

    // Buscamos el producto por su ID
    productoActual = productos.find(producto => producto.id === idProducto);

    // Guardamos qué imagen queremos mostrar
    imagenActual = indiceImagen;

    // Buscamos los elementos del zoom
    const modal = document.getElementById("modal-imagen");
    const imagenZoom = document.getElementById("imagen-zoom");

    // Mostramos la imagen correspondiente
    imagenZoom.src = productoActual.imagenes[imagenActual];

    // Mostramos el modal
    modal.classList.add("mostrar");
}


// ========================================
// CERRAR ZOOM
// ========================================

function cerrarZoom() {

    const modal = document.getElementById("modal-imagen");

    modal.classList.remove("mostrar");
}


// ========================================
// IMAGEN ANTERIOR
// ========================================

function imagenAnterior() {

    // Si estamos en la primera imagen,
    // volvemos a la última
    if (imagenActual === 0) {

        imagenActual = productoActual.imagenes.length - 1;

    } else {

        imagenActual--;
    }

    // Cambiamos la imagen
    document.getElementById("imagen-zoom").src =
        productoActual.imagenes[imagenActual];
}


// ========================================
// IMAGEN SIGUIENTE
// ========================================

function imagenSiguiente() {

    // Si estamos en la última imagen,
    // volvemos a la primera
    if (imagenActual === productoActual.imagenes.length - 1) {

        imagenActual = 0;

    } else {

        imagenActual++;
    }

    // Cambiamos la imagen
    document.getElementById("imagen-zoom").src =
        productoActual.imagenes[imagenActual];
}


// ========================================
// CARRITO
// ========================================

function agregarAlCarrito(id) {

    alert(`¡Producto con ID ${id} agregado con éxito!`);

}


// ========================================
// MOSTRAR LOS PRODUCTOS
// ========================================

mostrarProductos();