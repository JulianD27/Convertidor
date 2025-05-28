document.addEventListener('DOMContentLoaded', () => {
    const inventario = []; // Array para almacenar las cervezas

    // Referencias a los formularios y botones
    const formAgregar = document.getElementById('form-agregar');
    const formEliminar = document.getElementById('form-eliminar');
    const formBuscar = document.getElementById('form-buscar');
    const btnListar = document.getElementById('btn-listar');
    const resultadoBusqueda = document.getElementById('resultado-busqueda');
    const inventarioContainer = document.getElementById('inventario');

    // Función para agregar una cerveza
    formAgregar.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const marca = document.getElementById('marca').value.trim();
        const tipo = document.getElementById('tipo').value.trim();
        const cantidad = parseInt(document.getElementById('cantidad').value);

        if (nombre && marca && tipo && cantidad > 0) {
            inventario.push({ nombre, marca, tipo, cantidad });
            alert('Cerveza agregada correctamente.');
            formAgregar.reset();
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });

    // Función para eliminar una cerveza
    formEliminar.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreEliminar = document.getElementById('nombre-eliminar').value.trim();

        const index = inventario.findIndex(cerveza => cerveza.nombre.toLowerCase() === nombreEliminar.toLowerCase());
        if (index !== -1) {
            inventario.splice(index, 1);
            alert('Cerveza eliminada correctamente.');
            formEliminar.reset();
        } else {
            alert('No se encontró una cerveza con ese nombre.');
        }
    });

    // Función para buscar una cerveza
    formBuscar.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreBuscar = document.getElementById('nombre-buscar').value.trim();

        const cerveza = inventario.find(cerveza => cerveza.nombre.toLowerCase() === nombreBuscar.toLowerCase());
        if (cerveza) {
            resultadoBusqueda.innerHTML = `
                <p><strong>Nombre:</strong> ${cerveza.nombre}</p>
                <p><strong>Marca:</strong> ${cerveza.marca}</p>
                <p><strong>Tipo:</strong> ${cerveza.tipo}</p>
                <p><strong>Cantidad:</strong> ${cerveza.cantidad}</p>
            `;
        } else {
            resultadoBusqueda.innerHTML = '<p>No se encontró una cerveza con ese nombre.</p>';
        }
    });

    // Función para listar el inventario
    btnListar.addEventListener('click', () => {
        if (inventario.length > 0) {
            inventarioContainer.innerHTML = inventario.map(cerveza => `
                <div class="cerveza-item">
                    <p><strong>Nombre:</strong> ${cerveza.nombre}</p>
                    <p><strong>Marca:</strong> ${cerveza.marca}</p>
                    <p><strong>Tipo:</strong> ${cerveza.tipo}</p>
                    <p><strong>Cantidad:</strong> ${cerveza.cantidad}</p>
                </div>
            `).join('');
        } else {
            inventarioContainer.innerHTML = '<p>No hay cervezas en el inventario.</p>';
        }
    });
});