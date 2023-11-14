import './InventoryDetails.scss'
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryDetails() {

    const [inventory, setInventory] = useState([]);

    const { inventoryId } = useParams();
    console.log(inventoryId);

    useEffect(() => {
        const getInventory = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/inventories/1`);
                // const info = response.data;
                setInventory(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        getInventory();
    }, [inventoryId]);

    return (
        <section>
            <div className="inventory-container__top">
                <div className="inventory-container__top--one">
                    <img src={arrow} alt='arrow' />
                    <h4 className="top__text">Placeholder</h4>
                    <h2>{inventory.item_name}</h2>
                </div>
                <div className="inventory-container__top--two"><button src={edit}> Edit </button> </div>
            </div>
            <div className="inventory-container__main">
                <div className="inventory-container__descript">
                    <h4>ITEM DESCRIPTION:</h4>
                    {/* <h4>{inventory.description}</h4> */}
                    <div className="inventory-container__cat">
                        <h4>CATEGORY:</h4>
                        {/* <h4>{inventory.category}</h4> */}
                    </div>
                    <div className="inventory-container__hide--1">
                            <h4>STATUS:</h4>
                            {/* <h4>{inventory.status}</h4> */}
                        </div>
                        <div className="inventory-container__hide">
                            <h4>WAREHOUSE:</h4>
                            {/* <h4>{inventory.warehouse_name}</h4> */}
                        </div>
                </div>

                <div className="inventory-container__main--two">
                    <div className="inventory-container__right">
                        <div className="inventory-container__status">
                            <h4>STATUS:</h4>
                            {/* <h4>{inventory.status}</h4> */}
                        </div>
                        <div className="inventory-container__ware">
                            <h4>WAREHOUSE:</h4>
                            {/* <h4>{inventory.warehouse_name}</h4> */}
                        </div>
                    </div>
                    <div className="inventory-container__qty">
                        <h4>QUANTITY:</h4>
                        {/* <h4>{inventory.quantity}</h4> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InventoryDetails;