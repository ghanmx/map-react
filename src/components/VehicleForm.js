import React, { useState } from 'react';

function VehicleForm({ setVehicleDetails }) {
  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    // Otros campos relacionados al vehículo
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleSubmit = () => {
    // Validar y enviar datos del vehículo a App.js
    setVehicleDetails(vehicleData);
  };

  return (
    <div>
      <h2>Detalles del Vehículo</h2>
      <form>
        <input type="text" name="brand" value={vehicleData.brand} onChange={handleInputChange} placeholder="Marca" />
        <input type="text" name="model" value={vehicleData.model} onChange={handleInputChange} placeholder="Modelo" />
        {/* Otros campos del vehículo */}
        <button onClick={handleSubmit}>Continuar</button>
      </form>
    </div>
  );
}

export default VehicleForm;
