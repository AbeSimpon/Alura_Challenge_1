// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = [];

// funcion para limpiar el cuadro de texto.
function limpiarTexto(tagid) {
    document.getElementById(tagid).value = '';
}

// funcion para agregar "amigos" con respecto al cuadro de texto y almacenarlos en la lista creada.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    // compara si el cuadro de texto esta vacio.
    if (nombre == '') {
        alert('Ingrese un nombre valido');

    }else {

        listaDeNombres.push(nombre);
        limpiarTexto('amigo');
        actualizarLista();
        console.log(listaDeNombres); 
    }

}

// se crea una funcion para crear los elementos "li" de la lista "ul".
function crearElementosli(texto) {
    let li_nuevo = document.createElement("li");
    let n_texto = document.createTextNode(texto);

    li_nuevo.appendChild(n_texto);

    return li_nuevo;
}


function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i<listaDeNombres.length; i++) {
        let li = crearElementosli(listaDeNombres[i]);
        lista.appendChild(li);
    }
}

// funcion para elegir un indice aleatorio de nuestra lista:
function sortearAmigo() {
    let numero = Math.floor(Math.random()*listaDeNombres.length);

    if (listaDeNombres.length == 0) {
        alert('No hay nombres para seleccionar');
    }else {
        let listaAmigoSorteado = document.getElementById('resultado');
        listaAmigoSorteado.innerHTML = "";

        let liSorteado = crearElementosli(listaDeNombres[numero]);
        listaAmigoSorteado.appendChild(liSorteado);
    }

    return console.log(numero);
}