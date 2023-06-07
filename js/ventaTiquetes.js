document.addEventListener("DOMContentLoaded", function() {
    var sala = localStorage.getItem("sala");
    var hora = localStorage.getItem("hora");
    var fecha = localStorage.getItem("fecha");
  
    document.getElementById("salaLabel").textContent = sala;
    document.getElementById("horaLabel").textContent = hora;
    document.getElementById("fechaLabel").textContent = fecha;
    
  });
  var seatMap = document.getElementById("seatMap");
  var selectedSeats = [];
  var totalPriceElement = document.getElementById("totalPrice");
  var seatPrice = 5000;

  // Generar las sillas dinámicamente
  var numRows = 5;
  var seatsPerRow = 10;

  for (var i = 0; i < numRows; i++) {
      var row = String.fromCharCode(65 + i);
      var rowElement = document.createElement("div");
      rowElement.className = "seat-row";

      for (var j = 1; j <= seatsPerRow; j++) {
          var seatId = row + j;
          var seatElement = document.createElement("div");
          seatElement.className = "seat";
          seatElement.textContent = seatId;
          seatElement.setAttribute("data-seat-id", seatId);
          seatElement.setAttribute("data-price", seatPrice.toString());

          seatElement.addEventListener("click", function() {
              toggleSeatSelection(this);
          });

          rowElement.appendChild(seatElement);
      }

      seatMap.appendChild(rowElement);
  }

  function toggleSeatSelection(seat) {
      seat.classList.toggle("selected");
      var seatId = seat.getAttribute("data-seat-id");

      if (selectedSeats.includes(seatId)) {
          selectedSeats = selectedSeats.filter(function(item) {
              return item !== seatId;
          });
      } else {
          selectedSeats.push(seatId);
      }

      calculateTotalPrice();
  }

  function calculateTotalPrice() {
      var totalPrice = selectedSeats.length * seatPrice;
      totalPriceElement.textContent = "Total a pagar: $" + totalPrice;
  }

  function toggleSeatSelection(seat) {
    seat.classList.toggle("selected");
    var seatId = seat.getAttribute("data-seat-id");
  
    if (selectedSeats.includes(seatId)) {
      selectedSeats = selectedSeats.filter(function (item) {
        return item !== seatId;
      });
    } else {
      if (selectedSeats.length < numTiquetes) {
        selectedSeats.push(seatId);
      } else {
        seat.classList.remove("selected");
        return; // Ignorar la selección si se alcanzó el límite de tiquetes
      }
    }
  
    calculateTotalPrice();
  }
  
  function updateSeatAvailability() {
    numTiquetes = document.getElementById("numTiquetes").value;
  
    // Habilitar o deshabilitar la selección de las sillas según el número de tiquetes
    var seats = document.getElementsByClassName("seat");
    for (var i = 0; i < seats.length; i++) {
      var seatElement = seats[i];
      var seatId = seatElement.getAttribute("data-seat-id");
  
      if (
        selectedSeats.includes(seatId) ||
        selectedSeats.length >= numTiquetes
      ) {
        seatElement.removeEventListener("click", function () {
          toggleSeatSelection(this);
        });
        seatElement.classList.add("unavailable");
      } else {
        seatElement.addEventListener("click", function () {
          toggleSeatSelection(this);
        });
        seatElement.classList.remove("unavailable");
      }
    }
  
    // Actualizar el precio total
    calculateTotalPrice();
  }
  
  function showPaymentFields() {
    var formaPago = document.getElementById("formaPago").value;
    var paymentFields = document.getElementById("paymentFields");
    var numeroContainer = document.getElementById("numeroContainer");
    var contrasenaContainer = document.getElementById("contrasenaContainer");

    // Mostrar o ocultar los campos según la opción seleccionada
    if (formaPago === "davidPlata" || formaPago === "nequi" || formaPago === "bancolombia") {
      paymentFields.style.display = "block";
    } else {
      paymentFields.style.display = "none";
    }

    // Mostrar u ocultar los campos de número y contraseña según la opción seleccionada
    if (formaPago === "davidPlata" || formaPago === "nequi") {
      numeroContainer.style.display = "block";
      contrasenaContainer.style.display = "block";
    } else if (formaPago === "bancolombia") {
      numeroContainer.style.display = "block";
      contrasenaContainer.style.display = "block";
    } else {
      numeroContainer.style.display = "none";
      contrasenaContainer.style.display = "none";
    }
  }

  
 document.addEventListener("DOMContentLoaded", function() {
  var guardarButton = document.getElementById("guardarButton");
  guardarButton.addEventListener("click", guardarDatos);

  function guardarDatos() {
    var totalPrice = selectedSeats.length * seatPrice;
      totalPriceElement.textContent = "Total a pagar: $" + totalPrice;
 
    var salaLabel = document.getElementById("salaLabel");
    var horaLabel = document.getElementById("horaLabel");
    var fechaLabel = document.getElementById("fechaLabel");
    
    var sala = salaLabel.textContent;
    var hora = horaLabel.textContent;
    var fecha = fechaLabel.textContent;
    var numeroTiequetes=document.getElementById("numTiquetes").value
    var sillasSeleccionadas = selectedSeats;
    var nombre = document.getElementById("nombre").value;
    var formaPago = document.getElementById("formaPago").value;
    var numero = document.getElementById("numero").value;
    var contraseña = document.getElementById("contrasena").value;
    

    // Mostrar los datos en la consola
    console.log("Sala: " + sala);
    console.log("Horario: " + hora);
    console.log("Fecha: " + fecha);
    console.log("Numero de tiquetes: "+numeroTiequetes)
    console.log("Sillas seleccionadas: " + sillasSeleccionadas);
    console.log("Nombre: " + nombre);
    console.log("Forma de Pago: " + formaPago);
    console.log("Número: " + numero);
    console.log("Contraseña: " + contraseña);
    console.log("Total a pagar: "+totalPrice)
    localStorage.setItem("sala", sala);
localStorage.setItem("hora", hora);
localStorage.setItem("fecha", fecha);
localStorage.setItem("numeroTiquetes", numeroTiequetes);
localStorage.setItem("sillasSeleccionadas", JSON.stringify(sillasSeleccionadas));
localStorage.setItem("nombre", nombre);
localStorage.setItem("formaPago", formaPago);
localStorage.setItem("numero", numero);
localStorage.setItem("contraseña", contraseña);
localStorage.setItem("totalPrice", totalPrice);
window.location.href = "../html/factura.html";
    // Aquí puedes hacer lo que necesites con los datos, como enviarlos a un servidor o almacenarlos en una base de datos
  }
});

  
  