import * as UI from './interfaz.js';
import {API} from './api.js';
UI.formulario.addEventListener('submit', buscarCancion)

function buscarCancion(e) {
    e.preventDefault();
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        // User dejo al menos un campo vacio 
        UI.divMensaje.textContent = 'Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error')
        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error')

        }, 1000)
        return;
    }
    const api = new API(artista, cancion);
    api.consultarApi();

}