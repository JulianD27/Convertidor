document.addEventListener('DOMContentLoaded', () => {
    const licores = JSON.parse(localStorage.getItem('licores')) || [];
    const inventarioDiv = document.getElementById('inventario-licor');

    if (!inventarioDiv) return;

    if (licores.length === 0) {
        inventarioDiv.innerHTML = '<p>No hay licores en el inventario.</p>';
    } else {
        inventarioDiv.innerHTML = licores.map(licor => `
            <div class="licor-item">
                <p><strong>Nombre:</strong> ${licor.nombre}</p>
                <p><strong>Unidad de venta:</strong> ${licor.marca}</p>
                <p><strong>Presentación:</strong> ${licor.tipo}</p>
                <p><strong>Cantidad:</strong> ${licor.cantidad}</p>
            </div>
        `).join('');
    }
});