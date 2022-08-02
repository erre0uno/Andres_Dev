function tituloRed() {
    let titulo = document.querySelector('.h5-titulo');
    titulo.style.color = 'red';
}
function tituloBlue() {
    let titulo = document.querySelector('.h5-titulo');
    titulo.style.color = 'blue';

}
function crearParrafo() {
    let parrafo = document.createElement('p');
    let textoP = document.createTextNode('Hola soy el parrafo nuevo !!');
    let nuevoE = document.getElementById('crearParrafo');
    nuevoE.appendChild(parrafo);
    parrafo.appendChild(textoP);
    parrafo.style.textAlign = 'center';
    parrafo.style.fontSize = '20px';
}

/* ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FORM JS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*/

function validaForm() {
    let nombre = document.getElementById("nombre").value;
    let radios = document.getElementsByName("colombiano");
    let suerte = document.getElementById("suerte");

    if (nombre != '') {
        let nacionalidad;

        for (let index = 0; index < radios.length; index++) {
            if (radios[index].checked) {
                nacionalidad = radios[index].value;
            }
        }
        if (suerte.checked) {
            suerte = 'si';
        } else {
            suerte = 'no';
        }
        let resul = document.getElementById('resultado');
        resul.textContent = nombre + ' ' + nacionalidad + ' tiene nacionalidad colombiana y ' + suerte + ' tiene buena suerte';
    } else {
        alert('Deber ingresar un nombre para validar');
    }
}
/* ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ NEON JS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*/

function limpiar() {
    document.getElementById("nombre").value = '';
    let radios = document.getElementsByName("colombiano");
    for (let index = 0; index < radios.length; index++) {
        if (radios[index].checked) {
            radios[index].checked = false;
        }
    }
    document.getElementById("suerte").checked = false;
    document.getElementById('resultado').textContent = '';
}
function neon() {
    document.getElementById("neon").innerHTML = document.getElementById("textNeon").value;
}
function limpiarNeon() {
    document.getElementById("neon").innerHTML = 'Texto neon <br> Hola Mundo';
    document.getElementById("textNeon").innerText = 'Ingresa aquí texto para gerenar tu cartel';
}
//test
//console.log( document.getElementById("textNeon").value);

/* ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ TABLA JS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*/

let tablaTest = document.getElementById("tabla");
//console.log(tabla);   // elemento tabla en html
let atributos = tablaTest.attributes;
/*
for (let index = 0; index < atributos.length; index++) {
  console.log(atributos[index]);
}
*/  //arreglo[] atributos de la tabla > id y clases
let hijos = tablaTest.childNodes; // Nodos hijos
console.log(hijos);

function agregarFila() {

    let tabla = document.getElementById("tabla");
    let numFila = tabla.rows.length;
    tabla.insertRow(numFila).innerHTML =
        "<td> Pepito </td> <td> Perez </td> <td> oso@gmail.com </td>" +
        "<td> <button type='button' class='bt btn-sm btn-close' onClick='eliminarThis(this)' > </button> Eliminar </td> ";

    /*
    // FORMA 2 Con HTML
    let tabla = document.getElementById("tabla");
    let tablaRef = tabla.getElementsByTagName("tbody")[0];
    let fila ="<td> Pepito </td> <td> Perez </td> <td> oso@gmail.com </td>";
    let crearFila = document.createElement("TR");
    crearFila.innerHTML = fila;
    tablaRef.appendChild(crearFila);
    */

    /*
    // FORMA 3 PASO A PASO
    let tabla = document.getElementById("tabla");
    let tablaRef = tabla.getElementsByTagName("tbody")[0];
    let nuevaFila = tablaRef.insertRow(tablaRef.rows.length);
    let celdaUno = nuevaFila.insertCell(0);
    celdaUno.innerText="Pedro";
    let celdaDos = nuevaFila.insertCell(1);
    celdaDos.innerText = "Porras";
    let celdaTres = nuevaFila.insertCell(2);
    celdaTres.innerText = "pporras@gmail.com";
    */
}
function eliminarFila() {
    let tabla = document.getElementById("tabla");
    let numFila = tabla.rows.length - 1;
    if (numFila != 0) {
        console.log(numFila);
        tabla.deleteRow(numFila);
    }
}
function eliminarThis(celda) {

    let fila = celda.parentNode.parentNode;
    console.log(fila);
    fila.parentNode.deleteRow(fila);
}

let canvas = document.getElementById("micanvas");
let ctx = canvas.getContext("2d");

ctx.moveTo(10, 10);
ctx.lineTo(180, 180);
ctx.strokeStyle = "#f00";
ctx.stroke();

/*
function esPerfecto (numero){
    let divisores=[];
    for (let i = 1; i < numero; i++) {
      if (numero%i == 0){
        divisores.push(i);
      }
    }
    
    let sumaDivisores=0;  
    divisores.forEach( valor => sumaDivisores += valor );
    
    let valida ;
    if (numero == sumaDivisores){
      valida = " es perfecto";
    }
    else{
      valida = " no es perfecto";
    }
    
    console.log("numero "+numero+" sus divisores:"+divisores+valida);
}

function validaEsPerfectoMultiple() {
    for (let i = 0; i < arguments.length; i++) {
      esPerfecto(arguments[i]);
    }
}

validaEsPerfectoMultiple(6,28,4,5);
*/
/*
for(let j in divisores){suma+=j;}
  console.log(suma)
  

const sum = (...rest) => { 
  console.log('recibe ', rest);
}
sum(12, 33, 403, 30, 4, 10, 70);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
*/

function numerosMultiplos() {
    for (let i = 0; i < 101; i++) {
        if (i == 0) {
            console.log(i);
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }
}

numerosMultiplos();