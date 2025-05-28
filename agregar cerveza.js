
let inventario = JSON.parse(localStorage.getItem('inventario')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const formAgregar = document.getElementById('form-agregar');
    const resultadoAgregar = document.getElementById('resultado-agregar');

    formAgregar.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const marca = document.getElementById('marca').value.trim();
        const tipo = document.getElementById('tipo').value.trim();
        const cantidad = document.getElementById('cantidad').value.trim(); 

        if (!nombre || !marca || !tipo || !cantidad) {
            resultadoAgregar.innerHTML = `<p style="color:red;">Por favor, completa todos los campos correctamente.</p>`;
            return;
        }

       
        const existe = inventario.some(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (existe) {
            resultadoAgregar.innerHTML = `<p style="color:red;">Ya existe una cerveza con ese nombre.</p>`;
            return;
        }

        inventario.push({ nombre, marca, tipo, cantidad });
        localStorage.setItem('inventario', JSON.stringify(inventario));

        resultadoAgregar.innerHTML = `<p style="color:green;">Cerveza agregada correctamente.</p>`;
        formAgregar.reset();
    });

    formAgregar.addEventListener('reset', function() {
        resultadoAgregar.innerHTML = '';
    });
});