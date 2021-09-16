// function () {}

const saludo = function () {
    console.log("Hola mundo soy una function en una const");
}

//llamo a saludo
saludo();

var timerId = setTimeout(function () {
    console.log('Hola pasaron 5 segundo y me ejecute!');
}, 1000);
//cancelamos la ejecucion con el timerId 
console.log(timerId);
clearTimeout(timerId);



var producto = function (a, b) {
    return a * b;
}

//identado de codigo = alt + shift + f 
var resultado = producto(3, 6);
console.log('resultado = ' + resultado);



var miFuncion = new Function("a", "b", "return a * b");
var resultado2 = miFuncion(30, 10);
console.log("resultado dos : " + resultado2);

//Funciones auto imvocadas 
(function () {
    console.log('soy una funcion que se invoca sola !! ');
}());

//funcion tradicional 
function sumarCien(a) {
    return a + 100;
}

//1.elimina la palabra function y el nombre 
//2.colocar una flecha entre el argumento y el primer corchete
a => a + 100;


//demo de fuction flecha 
const materiales = [
    'cemento',
    'arena',
    'ladrillo',
    'piedra'
];

console.log(materiales.map(material => material.length));

var numbers = [1, 5, 10, 15];

var dobles = numbers.map((x) => x * 2);
console.log(dobles);


//for each
const array1 = ['a', 'b', 'c', 'd', 'e'];
array1.forEach(elemento => console.log(elemento));

function logArrayElementos(element, index) {
    console.log("a[" + index + "] = " + element);
}
[2, 5 ,9 ].forEach(logArrayElementos);