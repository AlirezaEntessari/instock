import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InventoryAdd from './pages/InventoryAdd/InventoryAdd';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"
          element={<>
            <HomePage />
          </>}/>
          <Route path="/warehouses/:id"
          element={<>
          </>}/>
          <Route path="/warehouses/add"
          element={<>
          <WarehouseAdd />
          </>}/>
          <Route path="/inventory"
          element={<>
          <InventoryPage />
          </>}/>
          <Route path="/inventory/:id"
          element={<>
          </>}/>
          <Route path="/inventory/add"
          element={<>
          <InventoryAdd />
          </>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
