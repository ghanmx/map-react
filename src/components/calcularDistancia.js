reportWebVitals();
function calcularDistancia(origen, puntoIntermedio, destino) {
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
      origins: [origen, puntoIntermedio],
      destinations: [puntoIntermedio, destino],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
  }, function(response, status) {
      if (status !== 'OK') {
          console.log('Error al calcular la distancia: ' + status);
      } else {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
          var distanciaTotal = 0;
          for (var i = 0; i < origins.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
                  var element = results[j];
                  var distance = element.distance.value;
                  distanciaTotal += distance;
              }
          }
          console.log('Distancia total desde el origen hasta el destino: ' + distanciaTotal + ' metros');
          // Ahora puedes sumar el banderazo y hacer la cotización
      }
  });
}
// DatosVehiculoUsuario.js
function recopilarInformacion() {
    // Lógica para recopilar información del vehículo y del usuario
    var nombreUsuario = prompt("Ingrese su nombre");
    var modeloVehiculo = prompt("Ingrese el modelo de su vehículo");
    
    // Puedes realizar más lógica según tus necesidades

    // Devuelve un objeto con la información recopilada
    return {
        nombreUsuario: nombreUsuario,
        modeloVehiculo: modeloVehiculo,
        // Otras propiedades según sea necesario
    };
}
