//tipos de datos Primitivos 
// boolean 
// null 
// undefined
// Symbol
// // var sym1 = Symbol("Foo")
// Object:  Object { indice : valor }
// Array 
// funtion

console.log("Hola Mundo Edu IT");
console.log("Constructores de variables");

console.log('Let / Var  / const');
//var : variables globales , no tiene un ámbito de bloque 
//admiten redeclaracion y redefinicion
// var a = true 
// var a = false

if (true) {
    var foo = 456;

}
console.log("VAR foo : " + foo); //456

//let variables locales al bloque , si tiene un ámbito de bloque
//no admite redeclaracion 
//admite redefinicion
//let foo = 123;
if (true) {
    let foo2 = 456;
}
console.log("LET foo : " + foo);


//CONST para variables inmutables
//no admiten redeclaracion ni redefinicion , es decir no podes vovler a declarar una variables que 
//ya fue inicializada
//no tienen alcance global 
//admiten redefinicion del componente interno 
if (true) {
    //esta const solo vive dentro del if 
    const foo3 = 123;
}

//console.log(foo3); //error no tengo scope para mostrar esta variable 
//const foo3 = 456; //ERROR! no se debe mutar una constante 

//objeto dentro de constante
const foo4 = {
    bar: 123,
    nombre: 'alex'
};
// console.dir(foo4);
//foo4 = { apellido: "de assis" };//no permitido 
foo4.nombre = "Mayra"; // si podemos modificar lo que esta dentro del objeto

console.dir(foo4); //dir para mostrar objetos 



//
console.log('Sintaxis de punto y de corchete ');
const obj = { x: 10, y: 20, 0: true };

//--------------------notacion corchete 
//indice numerico 
console.log(' obj[0] ' + obj[0]);

//indice string 
console.log(' obj[x] ' + obj["x"]);
console.log(' obj[y] ' + obj["y"]);

//indice con variable 
const indice = "x";
console.log("indice con variable :" + obj[indice]);


//-------------------------Notacion de Punto
console.log("NOTACION DE PUNTO ");

//indice numerico 
//obj.0 ; //no PERMITIDO!!!!!

//indice string 
console.log(' obj.x = ' + obj.x);

//indice con variable 
//const indise = x;
//no se puede acceder a un elemento usando una variable como "indice" en notacion de punto 
//console.log("indice con punto y variable :" + obj.indise ); // undefined 



//BOM (window) vs DOM (window.document)
//BOM : es la manera en que js representa a todo el navegador 
//DOM : es la forma en que js representa a la pagina en concreto , es una propiedad del BOM

var miVariable =  true ;
console.log(miVariable); //true

console.log(window.miVariable); //true










