let inventario = JSON.parse(localStorage.getItem('inventario')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const formVender = document.getElementById('form-vender');
    const resultadoVenta = document.getElementById('resultado-venta');

    formVender.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const cantidadVender = parseInt(document.getElementById('cantidad').value);

        if (!nombre || isNaN(cantidadVender) || cantidadVender < 1) {
            resultadoVenta.innerHTML = `<p style="color:red;">Por favor, ingresa un nombre y una cantidad válida.</p>`;
            return;
        }

        const producto = inventario.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (!producto) {
            resultadoVenta.innerHTML = `<p style="color:red;">No se encontró la cerveza "${nombre}" en el inventario.</p>`;
            return;
        }

        let cantidadActual = parseInt(producto.cantidad);
        if (isNaN(cantidadActual)) cantidadActual = 0;

        if (cantidadVender > cantidadActual) {
            resultadoVenta.innerHTML = `<p style="color:red;">No hay suficiente cantidad para vender. Disponible: ${cantidadActual}</p>`;
            return;
        }

        producto.cantidad = cantidadActual - cantidadVender;
        localStorage.setItem('inventario', JSON.stringify(inventario));

        resultadoVenta.innerHTML = `<p style="color:green;">Venta realizada. Quedan ${producto.cantidad} en inventario.</p>`;
        formVender.reset();
    });

    formVender.addEventListener('reset', function() {
        resultadoVenta.innerHTML = '';
    });
});