import './EditWarehouse.scss'
import backarrow from './../../styles/assets/Icons/arrow_back-24px.svg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditWarehouse() {

    const [ warehouses, setWarehouses ] = useState([]);

    const { warehouseId } = useParams();
    console.log(warehouseId);
    
    useEffect(() => {
      const getWarehouses = async () => {
          try {
              const response = await axios.get("http://localhost:8080/api/warehouses");
              const info = response.data;
              setWarehouses(info);
              console.log(info);
          } catch (error) {
          console.log(error);
          }
      };
      getWarehouses();
  }, []);


useEffect(() => {
    const getWarehouse = async (warehouseId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);
            const info = response.data;
            setWarehouses(info);
            console.log(info);
        } catch (error) {
        console.log(error);
        }
    };
    getWarehouse(warehouseId);
}, [warehouseId]);

console.log(warehouses[1]);
console.log(warehouses && warehouses[1]);

// console.log(warehouses[1].warehouse_name)
// console.log(warehouses[1].country);

console.log(warehouses && warehouses.length > 1 ? warehouses[1] : null);


return (
    <section>
        <div className="containeradd">
            <div className="containeradd__header">
                <img src={backarrow} className="containeradd__header--img" alt="back" />
                <h1>Edit Warehouse</h1>
            </div>
            <div className="warehouseaddContainer">
                <div className="warehouseaddContainer__left">
                    <p>Warehouse Details</p>
                    <div>
                        <h3>Warehouse Name</h3>
                        <input type="text" className="warehouseaddContainer__box"  placeholder="    Washington"/>
                    </div>
                    <div>
                        <h3>Street Address</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   300 Pearl Street SW'/>
                    </div>
                    <div>
                        <h3>City</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Washington'/>
                    </div>
                    <div>
                        <h3>Country</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   USA'/>
                    </div>
                </div>
                <div className="warehouseaddContainer__right">
                    <p>Contact Details</p>
                    <div>
                        <h3>Contact Name</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Graeme Lyon'/>
                    </div>
                    <div>
                        <h3>Position</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Warehouse Manager'/>
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   +1 (647) 504-0911'/>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   glyon@instock.com'/>
                    </div>
                </div>
            </div>
            <div className='warehouseaddContainer__buttons'>
                <button type="submit" value="submit" className="warehouseaddContainer__buttons--white">Cancel</button>
                <button type="submit" value="submit" className="warehouseaddContainer__buttons--blue">Add Warehouse</button>
                </div>
        </div>
    </section>
    )
}
export default EditWarehouse;