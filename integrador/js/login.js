
var passValida = false;
var userValida = false;
function validador() {
    passValida = validar("errorPassword", "password", /^abc.*/, "La clave es invalida");
    userValida = validar("errorUsername", "username", /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "El Usuario es invalido");
}

function validar(id, campo, regExp, mensaje,) {
    document.getElementById(campo).addEventListener("keyup",
        e => {

            if (regExp.test(e.target.value)) {
                document.getElementById(id).innerHTML = "";
                return true;
            } else {
                document.getElementById(id).innerHTML = mensaje;
                document.getElementById(id).classList.add("errorClass");
                return false;
            }
        }
    );
}

function login() {
    console.log(passValida);
    console.log(userValida);
    console.log("HOLas");

    if (passValida && userValida) {
        console.log("redireccionar");
    }
}