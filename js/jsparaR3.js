class Pelicula {
    constructor(codigo, nombreOriginal, nombreAsignado, genero, idiomaOriginal, idiomasDisponibles, subtitulosDisponibles, duracion, actoresPrincipales, actoresSecundarios, numAfiches, numCopias, productora) {
      this.codigo = codigo;
      this.nombreOriginal = nombreOriginal;
      this.nombreAsignado = nombreAsignado;
      this.genero = genero;
      this.idiomaOriginal = idiomaOriginal;
      this.idiomasDisponibles = idiomasDisponibles;
      this.subtitulosDisponibles = subtitulosDisponibles;
      this.duracion = duracion;
      this.actoresPrincipales = actoresPrincipales;
      this.actoresSecundarios = actoresSecundarios;
      this.numAfiches = numAfiches;
      this.numCopias = numCopias;
      this.productora = productora;
    }
  }
  
  var pelicula;
  
  function guardarPelicula() {
    var codigo = document.getElementById("codigo").value;
    var nombreOriginal = document.getElementById("nombre-original").value;
    var nombreAsignado = document.getElementById("nombre-asignado").value;
    var genero = document.getElementById("genero").value;
    var idiomaOriginal = document.getElementById("idioma-original").value;
    var idiomasDisponibles = document.getElementById("idiomas-disponibles").value;
    var subtitulosDisponibles = document.getElementById("subtitulos-disponibles").checked;
    var duracion = document.getElementById("duracion").value;
    var actoresPrincipales = document.getElementById("actores-principales").value;
    var actoresSecundarios = document.getElementById("actores-secundarios").value;
    var numAfiches = document.getElementById("num-afiches").value;
    var numCopias = document.getElementById("num-copias").value;
    var productora = document.getElementById("productora").value;
  
    pelicula = new Pelicula(codigo, nombreOriginal, nombreAsignado, genero, idiomaOriginal, idiomasDisponibles, subtitulosDisponibles, duracion, actoresPrincipales, actoresSecundarios, numAfiches, numCopias, productora);
  
    console.log("Película guardada exitosamente");
    console.log(pelicula);
  }
  
  function actualizarPelicula() {
    if (!pelicula) {
      console.log("No se ha guardado ninguna película aún");
      return;
    }
  
    pelicula.codigo = document.getElementById("codigo").value;
    pelicula.nombreOriginal = document.getElementById("nombre-original").value;
    pelicula.nombreAsignado = document.getElementById("nombre-asignado").value;
    pelicula.genero = document.getElementById("genero").value;
    pelicula.idiomaOriginal = document.getElementById("idioma-original").value;
    pelicula.idiomasDisponibles = document.getElementById("idiomas-disponibles").value;
    pelicula.subtitulosDisponibles = document.getElementById("subtitulos-disponibles").checked;
    pelicula.duracion = document.getElementById("duracion").value;
    pelicula.actoresPrincipales = document.getElementById("actores-principales").value;
    pelicula.actoresSecundarios = document.getElementById("actores-secundarios").value;
    pelicula.numAfiches = document.getElementById("num-afiches").value;
    pelicula.numCopias = document.getElementById("num-copias").value;
    pelicula.productora = document.getElementById("productora").value;
  
    console.log("Película actualizada exitosamente");
    console.log(pelicula);
  }