import * as UI from "./interfaz.js";

export class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        const spinner = document.createElement("div");
        UI.headingResultado.textContent = ''
        UI.divResultado.textContent = '';
        spinner.classList.add('spinner');

       document.querySelector(".letra-resultado").insertBefore(spinner, document.querySelector('#resultado'))
       fetch(url)
            .then(resultado => resultado.json())
            .then(resultado => {
                spinner.remove()
                const { lyrics } = resultado;
                if (resultado.lyrics) {
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción ${this.cancion} de ${this.artista}`
                } else {
                    UI.divMensaje.textContent = `La canción no existe prueba con otra busqueda`;
                    UI.divMensaje.classList.add('error')
                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error')

                    }, 1000)
                }

            })
            .catch(error => console.log(error)) 
    }
}