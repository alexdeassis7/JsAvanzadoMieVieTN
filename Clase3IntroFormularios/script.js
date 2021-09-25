let form = document.getElementById('form');

let btn = document.getElementById('btn');
let inputForm = document.getElementById('input');


//de tarea validar que desde js que el input number que esta dentro del form
//solo permita valores de entre 10 y 20 

form.addEventListener('submit', (e) => {
    //cancelamos el comportamiento determinado por defecto del evento submit 
    e.preventDefault();
    let valor = inputForm.value;
    console.log(valor);
    console.log(valor.length);
    let longitudTexto = valor.length;
    if (longitudTexto >= 5 && longitudTexto <= 7) {
        alert('enviamos su formulario');
    } else {
        alert('debe mas de 5 y menos de 7 caracteres');
    }

});

//Trabajo con elementos que estan fuera de un form 
let boton = document.getElementById('btn2');
let inputUno = document.getElementById('inputUno');

boton.addEventListener('click', () => {
    console.log("Usted presiono el boton suelto sin tag form");


    //HTMLSelectElement.checkValidity() podemos comprobar si un elemento tiene algun tipo de restriccion y si las cumple 
    //si el elemento no cumple las restriocciones para esa entra te retorna un false y lanza 
    //un evento "invalid" 
    console.log("cumple la validacion definida ? " + inputUno.checkValidity());
    if (inputUno.value.length > 1) {
        console.log("El input posee algo escrito en su interior");
    } else {
        alert('El input del apellido esta vacio , intenta de nuevo ');
    }

});






