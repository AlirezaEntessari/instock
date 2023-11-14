import InventoryList from "../../components/InventoryList/InventoryList"
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

function InventoryPage() {
    const [ inventories, setInventories ] = useState(null);
    
    useEffect(() => {
      const getInventories = async () => {
          try {
              const response = await axios.get(`http://localhost:8080/api/inventories`);
              const info = response.data;
              setInventories(info);
          } catch (error) {
          console.log(error);
          }
      };
      getInventories();
  }, []);
    return (
    
        <body>
            <InventoryList inventories={inventories} />
        </body>
    
    )
}

export default InventoryPage;