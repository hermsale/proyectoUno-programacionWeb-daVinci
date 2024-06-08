// carga de aplicaciones
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card-app');
    setTimeout( () =>{
        cards.forEach( (card) => {
            // Agrega la clase 'loaded' para cada tarjeta
            card.classList.add('loaded');
            // Oculta el elemento de carga si existe
            let loadingElement = card.querySelector('.card-app__loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        });
    }, 3000);
});


// loading carousel - tambien se agrego un temporizador para que la pagina quede no disponible mientras se carga todo
document.addEventListener('DOMContentLoaded', () => {
    
    const carouselLoading = document.querySelector('#carousel-principal');
    // seleccionamos al #carousel-principal y al .carousel-inner
    const carouselInner = document.querySelector('#carousel-principal .carousel-inner');

    // Agregamos un temporizador para que la pagina quede no disponible mientras se carga todo
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    // indicamos que el display de los elementos seleccionados en el querySelector. sea none
    carouselInner.style.display = 'none';
    // Agregar la clase 'loading' para indicar que está cargando
    carouselLoading.classList.add("loading");
    // Esperar 3 segundos antes de quitar la clase 'loading' y mostrar el .carousel-inner
    setTimeout(() =>{
        // una vez que pasan 3 segundos eliminamos del carousel-principal la clase 'loading'
        carouselLoading.classList.remove("loading");
        // y mostramos el .carousel-inner
        carouselInner.style.display = 'block';
        // quitamos el overlay
        overlay.style.display = 'none';
    }, 3000);  // 3000 milisegundos = 3 segundos
});

// seguir viendo 
document.addEventListener('DOMContentLoaded', () => {
    // esto hay que ocultarlo al principio y mostrarlo al final
    let cardsSeguirViendo = document.querySelectorAll('.card-seguir-viendo');
    let cardsSeguirViendoImg = document.querySelectorAll('.card-seguir-viendo img');
    
    // Mostrar las tarjetas después de 3 segundos
    cardsSeguirViendo.forEach((cardSeguir)=>{
        cardSeguir.classList.add('loaded');
    });
    
    setTimeout(() => {
        cardsSeguirViendoImg.forEach((cardImg) => {
            cardImg.classList.remove('loaded');
            cardImg.style.display = 'block';
            // let loadingElement = card.querySelector('.card-seguir-viendo__loading');
            // if(loadingElement){
            //     loadingElement.style.display = 'none';
            // }
        });
    }, 3000);
});

