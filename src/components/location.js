import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // Paso 1: Estados para la ubicación y la distancia
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  // Paso 2: Obtener la ubicación del usuario al cargar el componente
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  // Paso 3: Calcular la distancia y la cotización cuando la ubicación cambia
  useEffect(() => {
    if (location) {
      const origin = `${location.lat},${location.lng}`;
      const waypoint = 'waypoint_lat,waypoint_lng'; // Reemplaza con la coordenada del punto intermedio
      const destination = 'destination_lat,destination_lng'; // Reemplaza con la coordenada del destino

      // Paso 3.1: Obtener datos de distancia desde la API de Google Maps
      axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&waypoints=${waypoint}&key=AIzaSyBmqN73CN-MawQCrZm4Gqd3KPk8fHPtHIQ`)
        .then((response) => {
          // Paso 3.2: Calcular la distancia y el peaje
          const distance = response.data.rows[0].elements[0].distance.value;
          const toll = calculateToll(distance); // Reemplaza con tu función para calcular el peaje
          const quote = distance + toll; // Suma la distancia y el peaje para obtener la cotización
          setDistance(quote);
        });
    }
  }, [location]);

  // Paso 4: Función para calcular el peaje
  const calculateToll = (distance) => {
    // Aquí va tu lógica para calcular el peaje
    // Por ejemplo, puedes multiplicar la distancia por un factor fijo
    return distance * 0.1;
  };

  // Paso 5: Renderizar la aplicación
  return (
    <div>
      <h1>Servicio de Grúas</h1>
      {location && <p>Tu ubicación: {location.lat}, {location.lng}</p>}
      {distance && <p>Cotización: {distance}</p>}
    </div>
  );
};

export default App;
