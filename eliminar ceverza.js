let inventario = JSON.parse(localStorage.getItem('inventario')) || [];


function renderizarInventario() {
    const listaCervezas = document.getElementById('lista-cervezas');
    if (!listaCervezas) return;

    if (inventario.length === 0) {
        listaCervezas.innerHTML = '<p>No hay cervezas en el inventario.</p>';
    } else {
        listaCervezas.innerHTML = inventario.map(cerveza => `
            <div class="cerveza-item">
                <p><strong>Nombre:</strong> ${cerveza.nombre}</p>
                <p><strong>Marca:</strong> ${cerveza.marca}</p>
                <p><strong>Tipo:</strong> ${cerveza.tipo}</p>
                <p><strong>Cantidad:</strong> ${cerveza.cantidad}</p>
                <hr>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formEliminar = document.getElementById('form-eliminar');
    const resultadoEliminacion = document.getElementById('resultado-eliminacion');

    renderizarInventario();

    if (formEliminar) {
        formEliminar.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombreEliminar = document.getElementById('nombre-eliminar').value.trim();
            const confirmacion = document.getElementById('confirmacion').checked;
            if (!confirmacion) {
                resultadoEliminacion.innerHTML = `<p style="color:red;">Debes confirmar la eliminación.</p>`;
                return;
            }
            const index = inventario.findIndex(c => c.nombre.toLowerCase() === nombreEliminar.toLowerCase());
            if (index !== -1) {
                inventario.splice(index, 1);
                localStorage.setItem('inventario', JSON.stringify(inventario));
                resultadoEliminacion.innerHTML = `<p style="color:green;">Cerveza "${nombreEliminar}" eliminada correctamente.</p>`;
                formEliminar.reset();
                renderizarInventario(); 
            } else {
                resultadoEliminacion.innerHTML = `<p style="color:red;">No se encontró una cerveza con ese nombre.</p>`;
            }
        });
    }
})