document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactFormContainer').classList.remove('hidden');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    console.log('formdata',formData);
    fetch('submit_contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('response',response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Contacto enviado exitosamente.');
            document.getElementById('contactForm').reset();
            document.getElementById('contactFormContainer').classList.add('hidden');
        } else {
            alert('Error al enviar el contacto.');
        }
    })
    .catch(error => console.error('Error:', error));
    
});
