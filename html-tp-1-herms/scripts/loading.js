// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         let cards = document.querySelectorAll('.card-app');
//         cards.forEach(function(card) {
//             card.classList.add('loaded');
//             var loadingElement = card.querySelector('.card-app__loading');
//             if (loadingElement) {
//                 loadingElement.style.display = 'none';
//             }
//         });
//     }, 2000);
// });

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las tarjetas con la clase 'card-app'
    let cards = document.querySelectorAll('.card-app');

    // Remover clases innecesarias al inicio
    // cards.forEach(function(card) {
        // card.classList.remove('loaded');
    // });

    // Después de un retraso de 2000ms (2 segundos)
    setTimeout( () =>{
        cards.forEach( (card) => {
            // Agrega la clase 'loaded' para cada tarjeta
            card.classList.add('loaded');
            // Oculta el elemento de carga si existe
            var loadingElement = card.querySelector('.card-app__loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        });
    }, 3000);
});