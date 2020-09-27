/* Esta API Me Sirve Para Que El navegador Interprete
Y Escriba Cuando Se Le Habla Por Voz */

const salida = document.querySelector('#salida');
const microfonoBtn = document.querySelector('#microfono');

microfonoBtn.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    /* Iniciar Recognition A Escuchar */
    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = '.....Escuchando';
    }

    /* Termina Recognition De Escuchar */
    recognition.onspeechend = function() {
        salida.textContent = '...Se Dejo De Grabar Y Escuchar';
        recognition.stop();
    }

    /* Muestra El Resultado De Lo Que Escucho */
    recognition.onresult = function(e) {
        // console.log(e.results);
        // console.log(e.results[0][0]);

        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado => ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad => ${parseInt(confidence * 100)}`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}