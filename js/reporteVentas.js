function generateChart() {
    var monthSelect = document.getElementById('month');
    var selectedMonth = parseInt(monthSelect.value);
    var year = new Date().getFullYear();

    // Obtener el precio total a pagar desde el almacenamiento local
    var totalPrice = localStorage.getItem("totalPrice");
    if (!totalPrice) {
      totalPrice = 0; // Valor predeterminado si no se encuentra el precio en el almacenamiento local
    }

    // Obtener la fecha desde el almacenamiento local
    var fecha = localStorage.getItem("fecha");
    var ventaMonth = new Date(fecha).getMonth() + 1; // +1 porque los meses en JavaScript comienzan en 0
    
    // Validar que la venta sea del mes seleccionado
    if (selectedMonth !== ventaMonth) {
      alert("La venta no corresponde al mes seleccionado.");
      return;
    }

    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Quincena ', 'mensual '],
        datasets: [{
          label: 'Ventas',
          data: [totalPrice, totalPrice],
          backgroundColor: ['#007bff', '#007bff'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }