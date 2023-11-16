import Quotation from './components/Quotation.js';

import React, { useState, useEffect } from 'react';
import './App.css';
import VehicleForm from './components/VehicleForm';
import LocationMap from './components/LocationMap';
import Booking from './components/Booking';
import Payment from './components/Payment';
import Notifications from './components/Notifications';

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [Quotation, setQuotation] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    // Fetch user details or use Firebase Authentication here
  }, []);

  return (
    <div className="App">
      {bookingConfirmed ? (
        <Notifications />
      ) : (
        <div>
          <h1>Mr. Gruas</h1>
          <VehicleForm setVehicleDetails={setVehicleDetails} />
          <LocationMap setLocation={setLocation} setDestination={setDestination} />
          <Quotation location={location} destination={destination} setQuotation={setQuotation} /> {/* Agrega el componente Quotation */}<Quotation location={location} destination={destination} />

          <Booking userDetails={userDetails} vehicleDetails={vehicleDetails} Quotation={Quotation} setBookingConfirmed={setBookingConfirmed} />
          {Quotation && <Payment Quotation={Quotation} />}
        </div>
      )}
    </div>
  );
}

export default App;

