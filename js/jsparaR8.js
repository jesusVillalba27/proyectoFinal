document.getElementById("formularioUsuarios").addEventListener("submit", function(event){
    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var rol = document.getElementById("rol").value;
    var fechaCreacion = new Date().toLocaleString();
    var fechaModificacion = " ";

    var usuarioObj = {
        nombreUsuario: usuario,
        contrasena: contrasena,
        rol: rol,
        fechaCreacion: fechaCreacion,
        fechaModificacion: fechaModificacion
    };

    console.log("Nombre de usuario: ", usuarioObj.nombreUsuario);
    console.log("Contraseña: ", usuarioObj.contrasena);
    console.log("Rol: ", usuarioObj.rol);
    console.log("Fecha de creación: ", usuarioObj.fechaCreacion);
    console.log("Fecha de modificación: ", usuarioObj.fechaModificacion);

    localStorage.setItem("usuario", JSON.stringify(usuarioObj));
});