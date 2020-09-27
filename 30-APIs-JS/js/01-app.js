const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    /* Api Nativa De JavaScript */
    Notification.requestPermission().then(resultado => {
        console.log('El Resultado Es => ', resultado);
    })
});

/* Aqui Puedo Ver La Notificacion */
const verNotificacion = document.querySelector("#verNotificacion");

verNotificacion.addEventListener('click', () => {
    /* Api Nativa De JavaScript */
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta Es La Notificacion', {
            icon: './img/ccj.png',
            body: 'Código Aprendiendo Con Proyectos Reales'
        });

        notificacion.onclick = function() {
            open('www.google.com');
        }
    }
});