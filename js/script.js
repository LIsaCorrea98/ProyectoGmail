document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            to: document.getElementById('to').value,
            subject: document.getElementById('subject').value,
            cc: document.getElementById('cc').value,
            message: document.getElementById('message').value
        };

        // Aquí puedes agregar la lógica para enviar los datos al backend
        console.log('Datos del formulario:', formData);

        // Simulación de envío
        alert('Correo enviado con éxito!');

        // Resetear el formulario después de enviar
        form.reset();
    });
});