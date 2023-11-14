import React, { useState, useEffect } from 'react';

function Quotation({ vehicleDetails, location, destination, setQuotation }) {
  const [distance, setDistance] = useState(0);
  const [casetas, setCasetas] = useState(0);
  const [averiado, setAveriado] = useState(false);
  const [manejoSinManiobras, setManejoSinManiobras] = useState(false);
  const [manejoRequiere, setManejoRequiere] = useState(false);
  const [dolly, setDolly] = useState(false);
  const [pasajeros, setPasajeros] = useState(1);
  const [vehiculoCalle, setVehiculoCalle] = useState(true);

  useEffect(() => {
    // Implementa la lógica para calcular la distancia entre la ubicación y el destino
    if (location && destination) {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [location],
          destinations: [destination],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === 'OK' && response.rows[0].elements[0].status === 'OK') {
            const result = response.rows[0].elements[0];
            const distanceInMeters = result.distance.value;
            // Convierte la distancia a kilómetros y actualiza el estado
            setDistance(distanceInMeters / 1000);
          } else {
            // Manejo de errores
            console.error('Error al calcular la distancia:', status);
          }
        }
      );
    }
  }, [location, destination]);

  const handleQuotation = () => {
    // Aplicar la lógica de cotización
    let costoKilometro, banderazo;
    const tipoGrua = vehicleDetails.tipoGrua; // Asumo que este dato proviene de vehicleDetails

    switch (tipoGrua) {
      case 'A':
        costoKilometro = 18.82;
        banderazo = 528.69;
        break;
      case 'B':
        costoKilometro = 20.62;
        banderazo = 607.43;
        break;
      case 'C':
        costoKilometro = 23.47;
        banderazo = 721.79;
        break;
      case 'D':
        costoKilometro = 32.35;
        banderazo = 885.84;
        break;
      default:
        console.log('Tipo de grúa no válido. Debe ser "A", "B", "C" o "D".');
        return;
    }

    let costoTotalGrua = banderazo + costoKilometro * distance;
    const costCasetas = isNaN(casetas) ? 0 : 365 * casetas;
    const costManiobras = manejoSinManiobras ? 0 : 500;
    const costDolly = dolly ? 250 : 0;
    const costTaxi = pasajeros > 2 ? 1500 : 0;

    let costoTotal = costoTotalGrua + costCasetas + costManiobras + costDolly + costTaxi;

    if (averiado) {
      costoTotal += 500;
      if (manejoRequiere) {
        costoTotal += 500;
      }
    }

    if (!vehiculoCalle) {
      costoTotal += 500;
    }

    // Setea la cotización en el estado
    setQuotation({
      tipoGrua,
      distancia: distance,
      casetas,
      vehiculoCalle,
      averiado,
      manejoSinManiobras,
      manejoRequiere,
      dolly,
      pasajeros,
      costoTotal: costoTotal.toFixed(2),
    });
  };

  return (
    <div>
      <h2>Cotización</h2>
      <div>
        <label>Distancia (km): {distance}</label>
      </div>
      <div>
        <label>Casetas (anuales): </label>
        <input type="number" value={casetas} onChange={(e) => setCasetas(e.target.value)} />
      </div>
      <div>
        <label>Averiado: </label>
        <input type="checkbox" checked={averiado} onChange={() => setAveriado(!averiado)} />
      </div>
      <div>
        <label>Manejo sin maniobras: </label>
        <input
          type="checkbox"
          checked={manejoSinManiobras}
          onChange={() => setManejoSinManiobras(!manejoSinManiobras)}
        />
      </div>
      <div>
        <label>Manejo requiere grúa adicional: </label>
        <input
          type="checkbox"
          checked={manejoRequiere}
          onChange={() => setManejoRequiere(!manejoRequiere)}
        />
      </div>
      <div>
        <label>Dolly: </label>
        <input type="checkbox" checked={dolly} onChange={() => setDolly(!dolly)} />
      </div>
      <div>
        <label>Pasajeros: </label>
        <input type="number" value={pasajeros} onChange={(e) => setPasajeros(e.target.value)} />
      </div>
      <div>
        <label>Vehículo en calle: </label>
        <input
          type="checkbox"
          checked={vehiculoCalle}
          onChange={() => setVehiculoCalle(!vehiculoCalle)}
        />
      </div>
      <button onClick={handleQuotation}>Calcular Cotización</button>
    </div>
  );
}

export default Quotation;

