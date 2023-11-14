import { WarehouseDetails } from "../../components/WarehouseDetails/WarehouseDetails"
import './HomePage.scss'
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseSearch from '../../components/WarehouseSearch/WarehouseSearch';
import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
    const [ warehouses, setWarehouses ] = useState(null);
    
    useEffect(() => {
      const getWarehouses = async () => {
          try {
              const response = await axios.get(`http://localhost:8080/api/warehouses`);
              const info = response.data;
              setWarehouses(info);
          } catch (error) {
          console.log(error);
          }
      };
      getWarehouses();
  }, []);

    return (
        <body>
            <section className='warehousescontainer'>
            <WarehouseSearch />
            <WarehouseList 
            warehouses={warehouses}/>
            </section>
        </body>
    )
}

export default HomePage;
