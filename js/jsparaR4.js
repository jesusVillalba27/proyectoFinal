document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Obtener los valores del formulario
    var numero = document.getElementById('numero').value;
    var sucursal = document.getElementById('sucursal').value;
    var peliculas = document.getElementById('peliculas').value.split('\n');
    var cantidades = document.getElementById('cantidades').value.split('\n');
    var precio = parseFloat(document.getElementById('precio').value);
    var subtotal = 0;
    
    // Calcular el subtotal y crear una fila en la tabla
    var table = document.getElementById('purchase-table');
    var newRow = table.insertRow(-1);
    newRow.innerHTML = '<td>' + numero + '</td><td>' + sucursal + '</td><td>' + peliculas.join('<br>') + '</td><td>' + cantidades.join('<br>') + '</td><td>' + precio + '</td>';
    
    // Calcular el subtotal
    for (var i = 0; i < cantidades.length; i++) {
      subtotal += parseFloat(cantidades[i]) * precio;
    }
    
    // Añadir el subtotal y el total a la fila
    newRow.innerHTML += '<td>' + subtotal + '</td><td>' + subtotal + '</td><td>' + new Date().toLocaleDateString() + '</td>';
    
    // Limpiar los campos del formulario
    document.getElementById('numero').value = '';
    document.getElementById('sucursal').value = '';
    document.getElementById('peliculas').value = '';
    document.getElementById('cantidades').value = '';
    document.getElementById('precio').value = '';
  });