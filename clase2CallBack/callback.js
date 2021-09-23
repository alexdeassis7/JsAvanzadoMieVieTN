var muestraNombre = () => { console.log('Mi nombre es Ricardo Fort'); };

var muestraEdad = (edad) => { console.log('Mi edad es ' + edad); };

function mostrarApellido() {
    console.log("mi apellido es silva");
}

console.log('llamo a la funcion muestraNombre()');
muestraNombre();

console.log('llamo a la funcion muestraEdad()');
muestraEdad(12);

mostrarApellido();

function miFuncion(variable, callBackUno) {
    console.log('Recibi esta variable: ' + variable);
    callBackUno(); //ejecutamos la variable que recibimos por parametro
}

miFuncion('Pedro', () => { console.log(' Recibi una funcion y la ejecute ! MAGIA!'); })