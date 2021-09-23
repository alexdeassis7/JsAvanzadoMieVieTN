// Crear un div de 400px de ancho y 250px de alto con un borde solido que se 
// encuentre ubicado en el sector superior derecho de la pagina dentro del 
// mismo debera contener tres titulos centrados con tres nombre ( Jose , Marcelo , Martin ),
//  los nombres deberan tener una fuente "arial" y color rojo, en la seccion izquierda
//   del documento se solicita existan seis botones uno debajo de otro que nos permitan
//    realizar lo siguiente:

// boton 1 : al precionarlo debera mover el nombre de marcelo debajo de todos los nombres
// boton 2 : al precionarlo debera insertar o mover mi nombre debajo de todos los nombres 
// boton 3 : al precionarlo debera insertar o mover mi nombre debajo de marcelo
// boton 4 : al precionarlo debera reemplazar el nombre de jose y dejar alli mi nombre 
// boton 5 : al precionarlo debera suprimir el nombre de martin de los nombres 
// boton 6 : al precionarlo debera resetear el estado de los nombre y se debera vizualizar en primer lugar a jose  , 
//en segundo a Marcelo y tercero Martin 


function cambiar() {
    //capturamos una referencia a marcelo 
    var segundo = document.getElementById("segundo");

    //obtengo el padre de marce (cuadro)
    var padre = segundo.parentNode

    //removemos un hijo del padre 
    padre.removeChild(segundo);

    //agregamos un hijo al padre ,osea al div 
    padre.appendChild(segundo);

}

var nuevoElemento = document.createElement("p");
var nuevoTexto = document.createTextNode("Alex De Assis");
nuevoElemento.appendChild(nuevoTexto);
//nuevoElemento.id = "miNuevoElemento";


function debajo() {
    var div = document.getElementById("cuadro");
    div.appendChild(nuevoElemento);

    // var listaNodos = document.querySelectorAll("h4");
    // for (let index = 0; index < listaNodos.length; index++) {
    //     console.log("nodo " + index + " :" );
    //     console.dir( listaNodos[index]);

    // }


}

// boton 4 : al precionarlo debera reemplazar el nombre de jose y dejar alli mi nombre 

function reemplazar() {
    console.log(document.getElementsByTagName("div"));
    var primero = document.getElementById("primero");
    if (primero != null) {
        var padre = primero.parentNode;
        //reemplazamos un hijo del padre 
        padre.replaceChild(nuevoElemento, primero);
    } else {
        alert("Jose ya no existe amego!")
    }

}


// boton 5 : al precionarlo debera suprimir el nombre de martin de los nombres 
function suprimir() {
    var tercero = document.getElementById("tercero");
    if (tercero != null) {
        tercero.parentNode.removeChild(tercero);
    } else {
        console.log("ya eliminaste a martin");
    }
}


// boton 6 : al precionarlo debera resetear el estado de los nombre y se debera vizualizar en primer lugar a jose  , 
//en segundo a Marcelo y tercero Martin 
function restaurar() {
    location.reload();
}

function restaurar2() {
    var lugar = document.getElementById("cuadro");
    lugar.innerHTML = "<h4 id='primero'>Jose</h4>  <h4 id='segundo'>Marcelo</h4>  <h4 id='tercero'>Martin</h4>";
}

function restaurar3() {
    var cuadro = document.getElementById("cuadro");
    var padre = cuadro.parentElement;
    
    var div = document.createElement("div")
    div.id = "cuadro"

    padre.replaceChild(div, cuadro);

    var primero = document.createElement("h4")
    var Jose = document.createTextNode("Jose");
    primero.appendChild(Jose);
    primero.id = "primero";

    var segundo = document.createElement("h4")
    var Marcelo = document.createTextNode("Marcelo");
    segundo.appendChild(Marcelo);
    segundo.id = "segundo"

    var tercero = document.createElement("h4")
    var Martin = document.createTextNode("Martin");
    tercero.appendChild(Martin);
    tercero.id = "tercero"

    div.appendChild(primero);
    div.appendChild(segundo);
    div.appendChild(tercero);

}


// boton 3 : al precionarlo debera insertar o mover mi nombre debajo de marcelo
function TareaParaLaCasa() {

}

function suprimir2() {
    //selecciona el padre (div) 
    var cuadro = document.getElementById("cuadro");
    //selecciona todos los hijos del div 
    var hijos = cuadro.childNodes;
    //recorre los hijos con un for each
    hijos.forEach(element => {
        //busca el hijo que tenga el texto "Martin0"
        if (element.textContent == "Martin") {
            //remueve el hijo si es que se encontro
            cuadro.removeChild(element);
        }
    });
}


function suprimir3() {
    var tercero = document.getElementById("tercero");
    var div = document.getElementById("cuadro");
    if (tercero != null) {
        div.removeChild(tercero);
    }
}
