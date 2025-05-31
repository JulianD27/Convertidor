let licores = JSON.parse(localStorage.getItem('licores')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const formAgregar = document.getElementById('form-agregar-licor');
    const resultadoAgregar = document.getElementById('resultado-agregar-licor');

    formAgregar.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre-licor').value.trim();
        const marca = document.getElementById('marca-licor').value.trim();
        const tipo = document.getElementById('tipo-licor').value.trim();
        const cantidad = document.getElementById('cantidad-licor').value.trim();

        if (!nombre || !marca || !tipo || !cantidad) {
            resultadoAgregar.innerHTML = `<p style="color:red;">Por favor, completa todos los campos correctamente.</p>`;
            return;
        }

        const existe = licores.some(l => l.nombre.toLowerCase() === nombre.toLowerCase());
        if (existe) {
            resultadoAgregar.innerHTML = `<p style="color:red;">Ya existe un licor con ese nombre.</p>`;
            return;
        }

        licores.push({ nombre, marca, tipo, cantidad });
        localStorage.setItem('licores', JSON.stringify(licores));

        resultadoAgregar.innerHTML = `<p style="color:green;">Licor agregado correctamente.</p>`;
        formAgregar.reset();
    });

    formAgregar.addEventListener('reset', function() {
        resultadoAgregar.innerHTML = '';
    });
});