 var titulo = document.querySelector('h1');

 titulo.innerHTML= "Titulo creado desde JavaScript"; //cambiar -inyectar nuevo contenido 

 console.log(titulo.innerText); //leer el contenido actual del h1 


//  MANIPULAMOS LA ESTETICA DEL ELEMENTO

titulo.classList.add("azul");
titulo.classList.remove("titulo");
titulo.id = "titulo";

var items = document.querySelectorAll("li");
console.log(items);

for (let index = 0; index < items.length; index++) {
   
    items[index].innerHTML ="Elemeanto Nro <strong> " + ( index + 1) + "</strong> ";
    items[index].style.color = "#0A0";
    console.log(items[index].innerHTML );//Elemeanto Nro <strong> 5</strong> 
    console.log(items[index].innerText );//Elemeanto Nro 5

}

var parrafo = document.createElement("p");
// var valorActual = parrafo.innerText ;

parrafo.innerText = "Un nuevo texto creado por JS";
parrafo.append("-----------hola")
parrafo.style.color = "#0A0";
parrafo.id = "nuevo";
parrafo.classList.add("txtMagico");
//agregamos el elemento al dom !
document.body.appendChild(parrafo);

