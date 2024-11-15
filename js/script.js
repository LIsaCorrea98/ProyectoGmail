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

        // Generar el JSON
        const jsonData = JSON.stringify(formData, null, 2);

        // Mostrar el JSON en la consola
        console.log('Datos del formulario en JSON:', jsonData);

        // Simular el envío de datos al servidor
        sendDataToServer(jsonData);
    });
});

function sendDataToServer(jsonData) {
    // Simular una petición al servidor
    setTimeout(() => {
        // Simular una respuesta exitosa del servidor
        console.log('Datos enviados al servidor:', jsonData);
        alert('Correo enviado con éxito!');
        
        // Resetear el formulario después de enviar
        document.getElementById('emailForm').reset();
    }, 1000); // Simular un retraso de 1 segundo
}