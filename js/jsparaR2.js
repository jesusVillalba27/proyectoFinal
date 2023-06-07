class Productora{
    constructor(codigo, nombre, pais, telefonos, celulares, correo, representante){
        this.codigo = codigo;
        this.nombre = nombre;
        this.pais = pais;
        this.telefonos = telefonos;
        this.celulares = celulares;
        this.correo = correo;
        this.representante = representante;
    }
}

function guardarProductora(){
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const telefonos = document.getElementById("telefonos").value;
    const celulares = document.getElementById("celulares").value;
    const correo = document.getElementById("correo").value;
    const representante = document.getElementById("representante").value;

    const productora = new Productora(codigo, nombre, pais, telefonos, celulares, correo, representante);

    console.log("Productora guardada de forma exitosa:", productora);

    
}

function actualizarProductora(){
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const telefonos = document.getElementById("telefonos").value;
    const celulares = document.getElementById("celulares").value;
    const correo = document.getElementById("correo").value;
    const representante = document.getElementById("representante").value;

    const productora = new Productora(codigo, nombre, pais, telefonos, celulares, correo, representante);

    console.log("Productora actualizada de forma exitosa:", productora);
    
}