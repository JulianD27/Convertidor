document.addEventListener('DOMContentLoaded', () => {
    const inventario = JSON.parse(localStorage.getItem('inventario')) || [];
    const inventarioDiv = document.getElementById('inventario');

    if (!inventarioDiv) return;

    if (inventario.length === 0) {
        inventarioDiv.innerHTML = '<p>No hay cervezas en el inventario.</p>';
    } else {
        inventarioDiv.innerHTML = inventario.map(cerveza => `
            <div class="cerveza-item">
                <p><strong>Nombre:</strong> ${cerveza.nombre}</p>
                <p><strong>Marca:</strong> ${cerveza.marca}</p>
                <p><strong>Tipo:</strong> ${cerveza.tipo}</p>
                <p><strong>Cantidad:</strong> ${cerveza.cantidad}</p>
            </div>
        `).join('');
    }
});