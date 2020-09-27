/*  Esta Es Una API Nativa De JavaScript */

/* 
Este Ejemplo es muy bueno para desarrollar las barras de 
aprendizaje del portafolio de proyectos
 */
/*
Es un ejemplo muy común para aplicar un scroll infinito o el lazy loading
para algunas imagenes a medida que estas se vayan viendo en el viewport 
*/

/* Nos permite identificar un elemento una vez que es visible en el viewport 
del navegador
*/

document.addEventListener('DOMContentLoaded', () => {
    const obs$ = new IntersectionObserver(entries => {
        // console.log(entries[0]);

        if (entries[0].isIntersecting) {
            console.log('Ya Esta Visible, Para Las Barras De Habilidades');
        }
    });

    obs$.observe(document.querySelector('.premium'));
});