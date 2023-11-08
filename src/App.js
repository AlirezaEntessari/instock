import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import DeleteWarehouseModal from '../src/components/DeleteWarehouse/DeleteWarehouse';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentWarehouse, setCurrentWarehouse] = useState(null);

  const handleOpenModal = (warehouse) => {
    setCurrentWarehouse(warehouse);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentWarehouse(null);
    setModalOpen(false);
  };

  const handleDeleteWarehouse = () => {
    if (!currentWarehouse) {
      console.error("No current warehouse to delete");
      return;
    }

    const backendUrl = 'http://localhost:3000';

    axios.delete(`${backendUrl}/warehouses/${currentWarehouse.id}`)
      .then((response) => {
        if (response.status === 204) {
          console.log("Deletion successful");
          handleCloseModal();
        } else {
          console.error("Error deleting the warehouse");
        }
      })
      .catch((error) => {
        console.error("Network error or other issue occurred");
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<>
            <HomePage />
            <button onClick={() => handleOpenModal(currentWarehouseObject)}>Open Delete Warehouse Modal</button>
            <DeleteWarehouseModal
              open={isModalOpen}
              onClose={handleCloseModal}
              onDelete={handleDeleteWarehouse}
            />
          </>}
        />
        <Route path="/warehouses/:id"
          element={<>
          </>}
        />
        <Route path="/warehouses/add"
          element={<>
            <WarehouseAdd />
          </>}
        />
        <Route path="/inventory"
          element={<>
            <InventoryPage />
          </>}
        />
        <Route path="/inventory/:id"
          element={<>
          </>}
        />
        <Route path="/inventory/add"
          element={<>
            <InventoryAdd />
          </>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;