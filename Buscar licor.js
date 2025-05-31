const licores = JSON.parse(localStorage.getItem('licores')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const formBuscar = document.getElementById('form-buscar-licor');
    const resultadoBusqueda = document.getElementById('resultado-busqueda-licor');

    formBuscar.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombreBuscar = document.getElementById('nombre-buscar-licor').value.trim().toLowerCase();

        const licor = licores.find(l => l.nombre.toLowerCase() === nombreBuscar);

        if (licor) {
            resultadoBusqueda.innerHTML = `
                <p><strong>Nombre:</strong> ${licor.nombre}</p>
                <p><strong>Unidad de venta:</strong> ${licor.marca}</p>
                <p><strong>Presentación:</strong> ${licor.tipo}</p>
                <p><strong>Cantidad:</strong> ${licor.cantidad}</p>
            `;
        } else {
            resultadoBusqueda.innerHTML = `<p style="color:red;">No se encontró un licor con ese nombre.</p>`;
        }
    });

    formBuscar.addEventListener('reset', function() {
        resultadoBusqueda.innerHTML = '';
    });
});