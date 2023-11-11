import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import InventoryEdit from './components/InventoryEdit/inventoryEdit';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import WarehousePage from './pages/WarehousePage/WarehousePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/warehouses/:warehouseId" element={<WarehousePage />} />
        <Route path="/warehouses/add" element={<WarehouseAdd />} />
        <Route path="/warehouses/:warehouseId/edit" element={<EditWarehouse />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/add" element={<InventoryAdd />} />
        <Route path="/inventory/:id" element={<InventoryEdit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;