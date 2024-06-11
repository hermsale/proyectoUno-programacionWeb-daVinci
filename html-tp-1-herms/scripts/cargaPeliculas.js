const peliculas = `[
    {
      "titulo": "Spider Man",
      "descripcion": "Una película sobre el superhéroe Spider-Man.",
      "foto": "img/peliculas series/spiderman.png"
    },
    {
      "titulo": "Rambo",
      "descripcion": "Un exsoldado toma justicia por su cuenta.",
      "foto": "img/peliculas series/rambo.png"
    },
    {
      "titulo": "Armageddon",
      "descripcion": "Un equipo intenta salvar la Tierra de un asteroide.",
      "foto": "/img/peliculas series/armageddon.png"
    }
  ]`


const jsonData = JSON.parse(peliculas);
console.log(jsonData[0].titulo);
// Obtener el contenedor donde se agregarán las tarjetas de películas
const contenedorPeliculas = document.getElementById('div__seguirViendo');

// Iterar sobre cada película en el archivo JSON
jsonData.forEach(pelicula => {
  // Generar la estructura HTML de la tarjeta de película
  const tarjetaHTML = `
    <div class="card card-seguir-viendo col-3 p-0">
      <div class="card-seguir-viendo__loading"></div>
      <img src="${pelicula.foto}" class="card-img-top" alt="...">
      <div class="card-body p-0 m-0">
        <p class="card-title p__cardSeguirViendo--img">
          <img src="./img/icon/disney-icon.png" class="" style="width: 40%" alt="disney">
        </p>
      </div>
    </div>
  `;

  // Agregar la tarjeta al contenedor
  contenedorPeliculas.innerHTML += tarjetaHTML;
});