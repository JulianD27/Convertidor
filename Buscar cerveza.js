
const inventario = JSON.parse(localStorage.getItem('inventario')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const formBuscar = document.getElementById('form-buscar');
    const resultadoBusqueda = document.getElementById('resultado-busqueda');

    formBuscar.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombreBuscar = document.getElementById('nombre-buscar').value.trim().toLowerCase();

        const cerveza = inventario.find(c => c.nombre.toLowerCase() === nombreBuscar);

        if (cerveza) {
            resultadoBusqueda.innerHTML = `
                <p><strong>Nombre:</strong> ${cerveza.nombre}</p>
                <p><strong>Unidad de venta:</strong> ${cerveza.marca}</p>
                <p><strong>Tipo:</strong> ${cerveza.tipo}</p>
                <p><strong>Cantidad:</strong> ${cerveza.cantidad}</p>
            `;
        } else {
            resultadoBusqueda.innerHTML = `<p style="color:red;">No se encontró una cerveza con ese nombre.</p>`;
        }
    });

    formBuscar.addEventListener('reset', function() {
        resultadoBusqueda.innerHTML = '';
    });
});