// Obtener los datos del localStorage
var sala = localStorage.getItem("sala");
var hora = localStorage.getItem("hora");
var fecha = localStorage.getItem("fecha");
var numeroTiquetes = localStorage.getItem("numeroTiquetes");
var sillasSeleccionadas = JSON.parse(localStorage.getItem("sillasSeleccionadas"));
var nombre = localStorage.getItem("nombre");
var vende = localStorage.getItem("vendedor");
var formaPago = localStorage.getItem("formaPago");
var numero = localStorage.getItem("numero");
var contraseña = localStorage.getItem("contraseña");
var pay=localStorage.getItem("totalPrice");

// Mostrar los datos en la página
document.getElementById("salaLabel").textContent = sala;
document.getElementById("horaLabel").textContent = hora;
document.getElementById("fechaLabel").textContent = fecha;
document.getElementById("numeroTiquetesLabel").textContent = numeroTiquetes;
document.getElementById("sillasSeleccionadasLabel").textContent = sillasSeleccionadas.join(", ");
document.getElementById("nombreLabel").textContent = nombre;
document.getElementById("vendeLabel").textContent = vende;
document.getElementById("formaPagoLabel").textContent = formaPago;
document.getElementById("numeroLabel").textContent = numero;
document.getElementById("contraseñaLabel").textContent = contraseña;
document.getElementById("TotalPayLabel").textContent = pay;
