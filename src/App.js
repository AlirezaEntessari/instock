import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"
          element={<>
            <HomePage />
          </>} />
        <Route path="/warehouses/:warehouseId"
          element={<>
            <WarehousePage />
          </>} />
        <Route path="/warehouses/add"
          element={<>
            <WarehouseAdd />
          </>} />
        <Route path="/warehouses/edit"
          element={<>
            <EditWarehouse />
          </>} />
        <Route path="/inventory"
          element={<>
            <InventoryPage />
          </>} />
        <Route path="/inventory/:id"
          element={<><InventoryDetails /></>} />
        <Route path="/inventory/add"
          element={<>
            <InventoryAdd />
          </>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;