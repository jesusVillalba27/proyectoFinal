function mostrarCampoRedSocial() {
  var tipoRedSocial = document.getElementById("tipoRedSocial").value;
  var otraRedSocial = document.getElementById("otraRedSocial");

  if (tipoRedSocial === "otra") {
    otraRedSocial.style.display = "block";
  } else {
    otraRedSocial.style.display = "none";
  }
}

document.getElementById("formularioClientes").addEventListener("submit", function(event){
    event.preventDefault();
    
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var tipoRedSocial = document.getElementById("tipoRedSocial").value;
    var nicknameRedSocial = document.getElementById("nicknameRedSocial").value;
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var otraRedSocial = document.getElementById("otraRedSocial").value;

    if (tipoRedSocial === "otra") {
      tipoRedSocial = otraRedSocial;
    }
    var codigoValido = /^[a-zA-Z0-9]+$/.test(codigo);
      if (!codigoValido) {
        alert("El código de cliente debe contener solo caracteres alfanuméricos.");
        return;
      }
      var telefonoValido = /^[0-9]+$/.test(telefono);
      if (!telefonoValido) {
        alert("El campo Teléfono solo permite números.");
        return;
      }

    var cliente = new Cliente(codigo, nombre, apellido, direccion, telefono, correo, fechaNacimiento, tipoRedSocial, nicknameRedSocial);
    var usuario = new Usuario(nombreUsuario, contrasena);

    cliente.mostrarDatos();
    usuario.mostrarDatos();
    localStorage.setItem("cliente", JSON.stringify(cliente));
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Datos guardados exitosamente.");
});

class Cliente {
    constructor(codigo, nombre, apellido, direccion, telefono, correo, fechaNacimiento,tipoRedSocial, nicknameRedSocial){
        this.codigo=codigo;
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
        this.telefono=telefono;
        this.correo=correo;
        this.fechaNacimiento=fechaNacimiento;
        this.redesSociales = [{ tipo: tipoRedSocial, nickname: nicknameRedSocial}];
    }

    mostrarDatos(){
        console.log("Código de cliente:", this.codigo);
        console.log("Nombre:", this.nombre);
        console.log("Apellido:", this.apellido);
        console.log("Dirección:", this.direccion);
        console.log("Teléfono:", this.telefono);
        console.log("Correo electrónico:", this.correo);
        console.log("Fecha de nacimiento:", this.fechaNacimiento);
        console.log("Redes sociales:");
        this.redesSociales.forEach(function(redSocial) {
            console.log("- Tipo: " + redSocial.tipo);
            console.log("  Nickname: " + redSocial.nickname);
        });
    }
}

class Usuario{
    constructor(nombreUsuario, contrasena){
        this.nombreUsuario = nombreUsuario;
        this.contrasena= contrasena;
        this.rol = "cliente";
        this.fechaCreacion = new Date().toLocaleDateString();
        this.fechaModificacion = " ";
    }

    mostrarDatos() {
        console.log("Nombre de usuario:", this.nombreUsuario);
        console.log("Contraseña: ", this.contrasena);
        console.log("Rol: ", this.rol);
        console.log("Fecha de creación: ", this.fechaCreacion);
        console.log("Fecha de modificación: ", this.fechaModificacion);
    }
}