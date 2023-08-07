// Obtén las referencias a la tarjeta y al portador de la imagen.
let card = document.getElementById('card');
let imageHolder = document.getElementById('imageHolder');

// Cuando el mouse se coloca sobre la tarjeta, añade la imagen.
card.addEventListener('mouseover', function() {
    let image = document.createElement('img');
    image.src = 'img/logocerra.jpg'; // reemplaza 'ruta_de_tu_imagen.jpg' con la ruta de tu imagen
    image.style.width = '100%';
    image.style.height = '100%';
    imageHolder.appendChild(image);
});

// Cuando el mouse sale de la tarjeta, elimina la imagen.
card.addEventListener('mouseout', function() {
    while (imageHolder.firstChild) {
        imageHolder.removeChild(imageHolder.firstChild);
    }
});
