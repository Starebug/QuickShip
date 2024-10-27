import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ShipmentPage from './shipmentPage';
import SenderInput from './senderInput';
const Shipment = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="sender" element={<SenderInput/>} /> 
        <Route path="/" element={<ShipmentPage/>} /> 
      </Routes>
    </div>
  );
};

export default Shipment;
