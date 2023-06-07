class Sucursal {
    constructor (codigo, direccion, departamento, ciudad, gerente, numSalas, numTrabajadores, tieneCafeteria) {
        this.codigo = codigo;
        this.direccion = direccion;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.gerente = gerente;
        this.numSalas = numSalas;
        this.numTrabajadores = numTrabajadores;
        this.tieneCafeteria = tieneCafeteria;
    }
}

let sucursales = [];

function agregarSucursal() {
    const formulario = document.getElementById("sucursalForm");
    const codigo = formulario.elements.codigo.value;
    const direccion = formulario.elements.direccion.value;
    const departamento = formulario.elements.departamento.value;
    const ciudad = formulario.elements.ciudad.value;
    const gerente = formulario.elements.gerente.value;
    const numSalas = parseInt(formulario.elements.numSalas.value);
    const numTrabajadores = parseInt(formulario.elements.numTrabajadores.value);
    const tieneCafeteria = formulario.elements.tieneCafeteria.checked;

    const sucursal = new Sucursal(codigo, direccion, departamento, ciudad, gerente, numSalas, numTrabajadores, tieneCafeteria);
    sucursales.push(sucursal);
    console.log("Sucursal agregada:", sucursal);

    formulario.reset();
}

function actualizarSucursal() {
    const formulario = document.getElementById("sucursalForm");
    const codigo = formulario.elements.codigo.value;
    const direccion = formulario.elements.direccion.value;
    const departamento = formulario.elements.departamento.value;
    const ciudad = formulario.elements.ciudad.value;
    const gerente = formulario.elements.gerente.value;
    const numSalas = parseInt(formulario.elements.numSalas.value);
    const numTrabajadores = parseInt(formulario.elements.numTrabajadores.value);
    const tieneCafeteria = formulario.elements.tieneCafeteria.checked;

    const sucursal = sucursales.find((sucursal) => sucursal.codigo == codigo);

    if (sucursal) {
        sucursal.direccion = direccion;
        sucursal.departamento = departamento;
        sucursal.ciudad = ciudad;
        sucursal.gerente = gerente;
        sucursal.numSalas = numSalas;
        sucursal.numTrabajadores = numTrabajadores;
        sucursal.tieneCafeteria = tieneCafeteria;
        console.log("¡Sucursal actualizada! ", sucursal);
    } else {
        console.log("No se encontró la sucursal :(", codigo);
    }

    formulario.reset();
}