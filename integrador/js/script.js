//Curso de JS Avanzado Educacion IT 15 -9 - 2021

//Ejercicitacio Clase 2 Integrador: 
// Crear un card de 400px de ancho y 250px de alto con un borde solido que se 
// encuentre ubicado en el sector superior derecho de la pagina dentro del 
// mismo debera contener tres Imagenes centradas con tres personajes de los simpsond ( Homero , Marge , Lisa ), 
// los nombres deberan tener una fuente "arial" y color rojo, en la seccion izquierda 
// del documento se solicita existan seis botones uno debajo de otro que nos permitan 
// realizar lo siguiente:

// boton 1 : al precionarlo debera mover el personaje de Marge debajo de todos los personajes 
// boton 2 : al precionarlo debera insertar o mover a Bart debajo de todos los personajes 
// boton 3 : al precionarlo debera insertar o mover a Bart debajo de Marge 
// boton 4 : al precionarlo debera reemplazar el nombre de Homero y dejar alli a Bart 
// boton 5 : al precionarlo debera suprimir la imagen de Lisa de los personajes 
// boton 6 : al precionarlo debera resetear el estado de los personajes y se debera vizualizar en primer lugar a Homero , 
//en segundo a Marge y tercero Lisa

//Utilizar una car para mostrar imagen y nombre del persona en cuestion por ejemplo una card de aqui : https://getbootstrap.com/docs/4.0/components/card/ para utilizar bootstrap components agregar los siguiente al head

function mover() {
    var marge = document.getElementById("img_marge");
    var padre = marge.parentElement;
    padre.removeChild(marge);
    padre.appendChild(marge);
}

function agregar_bart() {
    var bart = document.createElement("h2")
    var nuevoTexto = document.createTextNode("Bart");

    bart.appendChild(nuevoTexto);
    bart.id = "img_bart"
    bart.classList.add('imagenes');

    var cuadro = document.getElementById("cuadro");
    var hijos = cuadro.childNodes;
    var existe = 0
    hijos.forEach(element => {
        if (element.textContent == bart.textContent) {
            existe++;
        }
    });

    if (existe == 0) {
        cuadro.appendChild(bart);
    } else {
        var elemento = document.getElementById("img_bart");
        cuadro.removeChild(elemento);
        cuadro.appendChild(elemento);
    }
}

function mover_bart() {
    var bart = document.getElementById("img_bart");

    if (bart == null) {
        bart = document.createElement("h2")
        var nuevoTexto = document.createTextNode("Bart");
        bart.appendChild(nuevoTexto);
        bart.id = "img_bart"
        bart.classList.add('imagenes');
    }

    var elementoAux = bart;

    var cuadro = document.getElementById("cuadro");
    var hijos = cuadro.childNodes;
    var bandera = 0;
    hijos.forEach(element => {
        console.log(element.textContent);
        if(bandera==1 && element.textContent != "Bart"){
            cuadro.replaceChild(elementoAux,element);
            elementoAux=element;
        }

        if (element.textContent == "Marge") {
            bandera=1;
        }

        
    });

    cuadro.appendChild(elementoAux);
}

function reemplazar(){
    var bart = document.getElementById("img_bart");

    if (bart == null) {
        bart = document.createElement("h2")
        var nuevoTexto = document.createTextNode("Bart");
        bart.appendChild(nuevoTexto);
        bart.id = "img_bart"
        bart.classList.add('imagenes');
    }

    var Homero = document.getElementById("img_homero");

    var cuadro = document.getElementById("cuadro");

    cuadro.replaceChild(bart,Homero);
}

function suprimir(){
    var lisa = document.getElementById("img_lisa");

    var cuadro = document.getElementById("cuadro");

    cuadro.removeChild(lisa);
}

function reset(){
    var cuadro = document.getElementById("cuadro");
    var padre = cuadro.parentElement;
    
    var Homero = document.getElementById("img_homero");
    if (Homero == null) {
        Homero = document.createElement("h2")
        var nuevoTexto = document.createTextNode("Homero");
        Homero.appendChild(nuevoTexto);
        Homero.id = "img_homero"
        Homero.classList.add('imagenes');
    }

    var marge = document.getElementById("img_marge");
    if (marge == null) {
        marge = document.createElement("h2")
        var nuevoTexto = document.createTextNode("Marge");
        marge.appendChild(nuevoTexto);
        marge.id = "img_marge"
        marge.classList.add('imagenes');
    }
    
    var lisa = document.getElementById("img_lisa");
    if (lisa == null) {
        lisa = document.createElement("h2")
        var nuevoTexto = document.createTextNode("Lisa");
        lisa.appendChild(nuevoTexto);
        lisa.id = "img_lisa"
        lisa.classList.add('imagenes');
    }

    var div = document.createElement("div")
    div.id = "cuadro"

    padre.replaceChild(div,cuadro);

    div.appendChild(Homero);
    div.appendChild(marge);
    div.appendChild(lisa);
}

var inputs = document.getElementsByClassName('formulario__input');
var enviar = document.getElementById("enviar");
var form = document.getElementById('formulario');

var nombre = document.getElementById("nombre");
var apellido= document.getElementById("apellido");
var mail=document.getElementById("mail");
var phone=document.getElementById("phone");
var mensaje=document.getElementById("mensaje");


 function validar(){

    let resultado = false;

    let expMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let expPhone = /^[0-9]*$/; 

    if(nombre.value.length<4 || nombre.value.length >50){
        alert("El campo nombre debe tener entre 4 y 50 caracteres");
    }
    else if(apellido.value.length<4 || apellido.value.length >50 ){
        alert("El campo apellido debe tener entre 4 y 50 caracteres");
    }else if(!expMail.test(mail.value)){
        alert("El mail ingresado no es valido");
    }else if(!expPhone.test(phone.value)){
        alert("El telefono ingresado no es valido");
    }else if(mensaje.value.length<=0){
        alert("Debe ingresar algun mensaje");
    }else{
        resultado = true;
    }

    return resultado;
};

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {//CHEQUEAMOS SI EL INPUT ESTA CON ALGO ESCRITO 
            //seleccionamos el siguiente elemento y le agregamos la clase 
            //fijar , esto es similar a lo que hicimos con el selector hermano("+") en css
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }

        if(nombre.value.length<=0 || apellido.value.length<=0 || apellido.value.length >50 || mail.value.length<=0 || phone.value.length<=0 || mensaje.value.length<=0){
            enviar.style.display="none";
        }else{
            enviar.style.display="initial";
        }
    });

}





