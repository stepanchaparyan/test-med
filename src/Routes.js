import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './containers/Welcome/Welcome';
import Shop from './containers/Shop/Shop';
import AddMedicine from './containers/AddMedicine/AddMedicine';


const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/shop/*" element={<Shop />} />
      <Route path="/addmedicine/*" element={<AddMedicine/>} />
    </Routes>
  );
};

export default MyRoutes;