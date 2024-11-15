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
        const jsonData = JSON.stringify(formData);

        // Enviar los datos al servidor
        sendDataToServer(jsonData);
    });
});

function sendDataToServer(jsonData) {
    fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Correo enviado con éxito!');
        document.getElementById('emailForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al enviar el correo. Por favor, intenta de nuevo.');
    });
}