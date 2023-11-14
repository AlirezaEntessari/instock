import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseAdd() {
    const [ warehouses, setWarehouses ] = useState(null);
    
      const getWarehouses = async () => {
              const response = await axios.get(`http://localhost:8080/api/warehouses`);
              const info = response.data;
              setWarehouses(info);
            };

    useEffect(() => {
        getWarehouses();
    }, []);
  
    const formSubmitHandler = async (e, warehouseName, streetAddress, city, country, contactName, position, phoneNumber, email) => {
        e.preventDefault();

        await axios.post(`http://localhost:8080/api/warehouses`, {
            warehouseName: warehouseName,
            streetAddress: streetAddress,
            city: city,
            country: country,
            contactName: contactName,
            position: position,
            phoneNumber: phoneNumber,
            email: email,
        });
        getWarehouses();
    };

    return (
        <body>
            <AddWarehouse 
            warehouses={warehouses}
            formSubmitHandler={formSubmitHandler}
            />
        </body>
    )
}

export default WarehouseAdd;