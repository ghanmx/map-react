import React, { useState, useEffect } from 'react';

// Importa la librería de Google Maps JavaScript API
import { loadGoogleMapsScript } from '../utils/googleMaps'; // Puedes crear un archivo de utilidad para cargar el script


function LocationMap({ setLocation, setDestination }) {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);

  useEffect(() => {
    // Implementa la lógica para obtener la ubicación del usuario y el destino.
    // Puedes usar Google Maps API para esto.
  }, []);

  const handleLocationSelect = () => {
    setLocation(userLocation);
  };

  const handleDestinationSelect = () => {
    setDestination(destinationLocation);
  };

  return (
    <div>
      <h2>Ubicación y Destino</h2>
      <button onClick={handleLocationSelect}>Seleccionar Ubicación</button>
      <button onClick={handleDestinationSelect}>Seleccionar Destino</button>
      {/* Mapa y lógica para seleccionar ubicación y destino */}
    </div>
  );
}


export const loadGoogleMapsScript = (callback) => {
  if (window.google) {
    // Si Google Maps ya está cargado, llama al callback
    callback();
  } else {
    // Si no, crea un nuevo script y agrega la API Key
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBmqN73CN-MawQCrZm4Gqd3KPk8fHPtHIQ&libraries=places`;
    script.onload = callback;
    script.async = true;
    document.body.appendChild(script);
  }
};

function LocationMap({ setLocation, setDestination }) {
  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);

  useEffect(() => {
    loadGoogleMapsScript(() => {
      // Una vez que el script de Google Maps se haya cargado, puedes usar la API aquí
      const geocoder = new window.google.maps.Geocoder();

      // Obtener la ubicación del usuario
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setUserLocation(new window.google.maps.LatLng(lat, lng));
        });
      }

      // Implementa la lógica para obtener la ubicación de destino, por ejemplo, a través de un cuadro de búsqueda.
      // ...

    });
  }, []);

  const handleLocationSelect = () => {
    setLocation(userLocation);
  };

  const handleDestinationSelect = () => {
    setDestination(destinationLocation);
  };

  return (
    <div>
      <h2>Ubicación y Destino</h2>
      <button onClick={handleLocationSelect}>Seleccionar Ubicación</button>
      <button onClick={handleDestinationSelect}>Seleccionar Destino</button>
      {/* Mapa y lógica para seleccionar ubicación y destino */}
    </div>
  );
}

// ...

useEffect(() => {
  loadGoogleMapsScript(() => {
    // Una vez que el script de Google Maps se haya cargado, puedes usar la API aquí
    const geocoder = new window.google.maps.Geocoder();

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const userLatLng = new window.google.maps.LatLng(lat, lng);
        setUserLocation(userLatLng);
      });
    }

    // Implementa la lógica para obtener la ubicación de destino, por ejemplo, a través de un cuadro de búsqueda.
    // ...

  });
}, []);

// ...
