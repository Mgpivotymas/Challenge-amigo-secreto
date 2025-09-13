let Amigos = [] // declaramos la lista
let ganador //declaramos ganador 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
let nombresUsuario = document.querySelector("#amigo");
    if (nombresUsuario.value == "") // si la caja de texto esta vacia se da un aviso y se devuelve
    alert("Por favor, inserte un nombre.");
 else {

    Amigos.push(nombresUsuario.value) // Se suma a la lista el nombre proporcionado
    mostraramigos() 

    
    limpiarcaja() // se muestra la lista actualizada y se limpia la caja
    return;
}

}

function mostraramigos() {

let lista = document.querySelector("#listaAmigos")  
lista.innerHTML = ""   

 for (let i = 0; i < Amigos.length; i++) { // se crea un bucle para crear un nuevo elemento por cada nombre agregado.

    lista.innerHTML += `<li>${Amigos[i]}</li>`; // se muestra en la pantalla la lista de amigos en vertical
    }

}

function sortearAmigo() {
    if (Amigos.length === 0) {
        alert("No hay amigos en la lista para sortear"); // si la lista de amigos, esta vacia se da un aviso y se devuelve
        return;
    }
    let indice = Math.floor(Math.random() * Amigos.length); // el indice es un numero aleatorio que tiene de limite la lista de amigos
    let resultado = document.querySelector("#resultado") // se selecciona el id de un documento html
    let ganador = Amigos[indice]; // se selecciona al ganador
    resultado.innerHTML = (`El ganador es ${ganador}`)
    
}

function limpiarcaja() {
    let valorcaja = document.getElementById("amigo");
    valorcaja.value = "" // se establece el valor de la caja a ""
}
