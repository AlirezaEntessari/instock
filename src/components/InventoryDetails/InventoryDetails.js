import './InventoryDetails.scss'
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryDetails(  ) {

    const [ inventory, setInventory ] = useState(null);

    const { inventoryId } = useParams();
    console.log(inventoryId);
     
    useEffect(() => {
      const getInventory = async (inventoryId) => {
          try {
              const response = await axios.get(`http://localhost:8080/api/inventories/${inventoryId || 1}`);
              const info = response.data[0];
              setInventory(info);
              console.log(info);
          } catch (error) {
          console.log(error);
          }
      };
      getInventory(inventoryId);
  }, [inventoryId]);



    return (
        <section>
            <div className="container">
                {inventory && (
                <div key={inventory.id} className="inventoryContainer">
                    <div className="inventoryContainer__left">
                        <div className="inventoryContainer__left--start">
                            <h4>WAREHOUSE</h4>
                            <div div className="inventoryContainer__left--start--align">
                            <h2>{inventory.inventory_name}</h2>
                            <img src={arrow} alt='arrow' className="inventoryContainer__left--img"/>
                            </div>
                        </div>
                        <div className="inventoryContainer__left--middle">
                            <h4>ADDRESS</h4>
                            <h3>{inventory.address}</h3>
                        </div>
                            <img src={del} alt="delete" className='shrink'/>
                    </div>
                    <div className="inventoryContainer__right">
                        <div className="inventoryContainer__right--start">
                            <h4>CONTACT NAME</h4>
                            <h3>{inventory.contact_name}</h3>
                        </div>
                        <div className="inventoryContainer__right--middle">
                            <h4>CONTACT INFORMATION</h4>
                            <h3>{inventory.phone}{inventory.contact_email}</h3>
                        </div>
                            <img src={edit} alt="edit" className='shrink2'/>
                    </div>
                    <div className="inventoryContainer__far">
                        <div className="inventoryContainer__far--align">
                            <img src={del} alt="delete" className='shrink__hidden'/>
                            <img src={edit} alt="edit" className='shrink2__hidden'/>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}

export default InventoryDetails;