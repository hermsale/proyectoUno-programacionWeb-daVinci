fetch('peliculas.json')
      .then(response => response.json())
      .then(data => {
        // Iterar sobre cada película y crear las cartas de películas
        data.forEach(pelicula => {
          const cartaPelicula = crearCartaPelicula(pelicula);
          contenedorPeliculas.appendChild(cartaPelicula);
          console.log(pelicula);
        });
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
git