var links = document.querySelectorAll("a");
var main = document.querySelector("main");

console.log(links);


links.forEach((link) => {
    link.addEventListener("click", () => {
        let id = link.id;
        let archivo = id + ".html";
        let XHR = ajax(archivo)

        XHR.addEventListener("load", () => {
            if(XHR.status == 200){
                main.innerHTML = XHR.response
            }else{
                main.innerText = "El contenido Solicitado No se pudo  Cargar"               
            }
        })
    })
})

function ajax(url, metodo) {
    let http_metodo = metodo || "GET";
    let xhr = new XMLHttpRequest
    xhr.open(http_metodo, url, true)
    xhr.send();
    return xhr;
}