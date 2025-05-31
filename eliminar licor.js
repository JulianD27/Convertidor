let licores = JSON.parse(localStorage.getItem('licores')) || [];

function renderizarLicores() {
    const listaLicores = document.getElementById('lista-licores');
    if (!listaLicores) return;

    if (licores.length === 0) {
        listaLicores.innerHTML = '<p>No hay licores en el inventario.</p>';
    } else {
        listaLicores.innerHTML = licores.map(licor => `
            <div class="licor-item">
                <p><strong>Nombre:</strong> ${licor.nombre}</p>
                <p><strong>Unidad de venta:</strong> ${licor.marca}</p>
                <p><strong>Presentación:</strong> ${licor.tipo}</p>
                <p><strong>Cantidad:</strong> ${licor.cantidad}</p>
                <hr>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formEliminar = document.getElementById('form-eliminar-licor');
    const resultadoEliminacion = document.getElementById('resultado-eliminacion-licor');

    renderizarLicores();

    if (formEliminar) {
        formEliminar.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombreEliminar = document.getElementById('nombre-eliminar-licor').value.trim();
            const confirmacion = document.getElementById('confirmacion-licor').checked;
            if (!confirmacion) {
                resultadoEliminacion.innerHTML = `<p style="color:red;">Debes confirmar la eliminación.</p>`;
                return;
            }
            const index = licores.findIndex(l => l.nombre.toLowerCase() === nombreEliminar.toLowerCase());
            if (index !== -1) {
                licores.splice(index, 1);
                localStorage.setItem('licores', JSON.stringify(licores));
                resultadoEliminacion.innerHTML = `<p style="color:green;">Licor "${nombreEliminar}" eliminado correctamente.</p>`;
                formEliminar.reset();
                renderizarLicores(); 
            } else {
                resultadoEliminacion.innerHTML = `<p style="color:red;">No se encontró un licor con ese nombre.</p>`;
            }
        });
    }
});