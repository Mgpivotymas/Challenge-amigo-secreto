let Amigos = []
let ganador
let listaHTML = "<ul>";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
let nombresUsuario = document.querySelector("#amigo");
    if (nombresUsuario.value == "")
    alert("Por favor, inserte un nombre.");
 else {

    Amigos.push(nombresUsuario.value)
    mostraramigos()

    
    limpiarcaja()
    return;
}

}

function mostraramigos() {

let lista = document.querySelector("#listaAmigos")  
lista.innerHTML = ""   

 for (let i = 0; i < Amigos.length; i++) {

    lista.innerHTML += `<li>${Amigos[i]}</li>`;
    }

}



function sortearAmigo() {
    if (Amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    let indice = Math.floor(Math.random() * Amigos.length);
    let resultado = document.querySelector("#resultado")
    let ganador = Amigos[indice];
    resultado.innerHTML = (`El ganador es ${ganador}`)
    
}



function limpiarcaja() {
    let valorcaja = document.getElementById("amigo");
    valorcaja.value = ""
}



console.log(Amigos)
console.log(agregarAmigo)


