import './InventoryDetails.scss'
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryDetails() {

    const [inventory, setInventory] = useState(null);

    const { inventoryId } = useParams();
    console.log(inventoryId);

    useEffect(() => {
        const getInventory = async (inventoryId) => {
            try {
                const response = await axios.get(`http://localhost:3000/api/inventories/${inventoryId || 1}`);
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
            <div className="inventory-container__top">
                <img src={arrow} alt='arrow' />
                <h2>{inventory.inventory_name}</h2>
            </div>
            <div className="inventory-container__button">
                <button src={edit}></button>
            </div>
            <div className="inventory-container__main">
                <div className="inventory-container__descript">
                    <h4>ITEM DESCRIPTION:</h4>
                    <h4>{inventory.description}</h4>
                </div>
                <div className="inventory-container__cat">
                    <h4>CATEGORY:</h4>
                    <h4>{inventory.category}</h4>
                </div>
                <div className="inventory-container__main--two">
                    <div className="inventory-container__right">
                        <div className="inventory-container__status">
                            <h4>STATUS:</h4>
                            <h4>{inventory.status}</h4>
                        </div>
                        <div className="inventory-container__ware">
                            <h4>WAREHOUSE:</h4>
                            <h4>{inventory.warehouse_name}</h4>
                        </div>
                    </div>
                    <div className="inventory-container__qty">
                        <h4>QUANTITY:</h4>
                        <h4>{inventory.quantity}</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InventoryDetails;