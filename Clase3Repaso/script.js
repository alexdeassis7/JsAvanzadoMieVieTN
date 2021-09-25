var gallery = document.querySelector(".gallery-container");

gallery.addEventListener('click', e => {
    console.log("Elemento que dispara el evento : " + e.target);
    console.log("Event type " + e.type);

    if (e.target.classList.contains('gallery-item')) {
        console.log("presionaste en un elemento del tipo img");
        e.target.classList.remove("gallery-item");
    } else {
        console.log("presionaste un elemento que no es del tipo IMG");
    }

});