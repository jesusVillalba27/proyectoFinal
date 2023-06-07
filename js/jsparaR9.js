document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUsuario = JSON.parse(localStorage.getItem("usuario"));

    if (username === storedUsuario.nombreUsuario && password === storedUsuario.contrasena) {
        console.log("Inicio de sesión exitoso");

        // Obtener el rol del usuario
        var storedRole = storedUsuario.rol;

        // Redireccionar a la página según el rol
        if (storedRole === "gerente") {
            window.location.href = "../html/opcionGerente.html";
        } else if (storedRole === "vendedor") {
            window.location.href = "../html/OpcionesVendedor.html";
        } else if (storedRole === "administrador") {
            window.location.href = "../html/OpcionesAdministrador.html";
        } else if (storedRole === "cliente") {
            window.location.href = "../html/OpcionesCliente.html";
        } else {
            console.log("Rol desconocido");
        }
    } else {
        console.log("Usuario y/o contraseña incorrectos");
    }
});