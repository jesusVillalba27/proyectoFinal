var reserva = {}; // Variable para almacenar la reserva seleccionada

function mostrarHorarios() {
  var sala = document.getElementById("sala").value;
  var fecha = document.getElementById("fecha").value;
  
  // Aquí puedes generar los horarios disponibles de forma aleatoria o con lógica personalizada
  var horarios = generarHorariosAleatorios();

  var horariosContainer = document.getElementById("horarios-container");
  horariosContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar los nuevos horarios
  
  for (var i = 0; i < horarios.length; i++) {
    var horario = horarios[i];

    var input = document.createElement("input");
    input.type = "radio";
    input.name = "horario";
    input.value = horario;
    
    var label = document.createElement("label");
    label.appendChild(input);
    label.appendChild(document.createTextNode(horario));
    
    horariosContainer.appendChild(label);
  }
}

function generarHorariosAleatorios() {
  // Aquí puedes implementar tu lógica para generar horarios aleatorios
  // En este ejemplo, simplemente se generan horarios ficticios para mostrar
    
  var horarios = [
    "10:00 AM", "12:30 PM", "3:00 PM","5:30 PM","8:00 PM"
  ];

  return horarios;
}

function guardar() {
  var sala = document.getElementById("sala").value;
  var fecha = document.getElementById("fecha").value;
  var horarioSeleccionado = document.querySelector('input[name="horario"]:checked');
  
  if (horarioSeleccionado) {
    var hora = horarioSeleccionado.value;

    // Actualizar el objeto de reserva con la información seleccionada
    reserva.sala = sala;
    reserva.fecha = fecha;
    reserva.hora = hora;
   

    console.log("Información de reserva guardada:", reserva);
    localStorage.setItem("sala", sala);
    localStorage.setItem("hora", hora);
    localStorage.setItem("fecha", fecha);
    window.location.href = "../html/ventaTiquetes.html";
  } else {
    console.log("Selecciona un horario válido.");
  }
}


  