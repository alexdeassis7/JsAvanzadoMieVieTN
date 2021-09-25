var inputs = document.getElementsByClassName('formulario__input');

for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {//CHEQUEAMOS SI EL INPUT ESTA CON ALGO ESCRITO 
            //seleccionamos el siguiente elemento y le agregamos la clase 
            //fijar , esto es similar a lo que hicimos con el selector hermano("+") en css
            this.nextElementSibling.classList.add('fijar');
        }else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

