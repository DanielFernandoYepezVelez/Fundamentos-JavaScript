/*
Para Cuando Estoy Viendo Un Video Y Cambio De Pagina,
Entonces Este Se Pausa Automaticamente O Para Cuando
Voy A Ingresar Nuevamente A Una Página El Video Se Reinicie
Automaticamente.
*/

document.addEventListener('visibilitychange', () => {
    // console.log(document.visibilityState);

    if (document.visibilityState === 'visible') {
        console.log('........Ejecutar Para Reproducir El Video');
    } else {
        console.log('Pausar El Video');
    }
});