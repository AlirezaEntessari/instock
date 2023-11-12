import './WarehouseDetails.scss'
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WarehouseDetails() {

    const [warehouse, setWarehouse] = useState(null);

    const { warehouseId } = useParams();
    console.log(warehouseId);

    useEffect(() => {
        const getWarehouse = async (warehouseId) => {
            try {
                const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId || 1}`);
                const info = response.data[0];
                setWarehouse(info);
                console.log(info);
            } catch (error) {
                console.log(error);
            }
        };
        getWarehouse(warehouseId);
    }, [warehouseId]);



    return (
        <section>
            <div className="container">
                {warehouse && (
                    <div key={warehouse.id} className="warehouseContainer">
                        <div className="warehouseContainer__left">
                            <div className="warehouseContainer__left--start">
                                <h4>WAREHOUSE</h4>
                                <div div className="warehouseContainer__left--start--align">
                                    <h2>{warehouse.warehouse_name}</h2>
                                    <img src={arrow} alt='arrow' className="warehouseContainer__left--img" />
                                </div>
                            </div>
                            <div className="warehouseContainer__left--middle">
                                <h4>ADDRESS</h4>
                                <h3>{warehouse.address}</h3>
                            </div>
                            <img src={del} alt="delete" className='shrink' />
                        </div>
                        <div className="warehouseContainer__right">
                            <div className="warehouseContainer__right--start">
                                <h4>CONTACT NAME</h4>
                                <h3>{warehouse.contact_name}</h3>
                            </div>
                            <div className="warehouseContainer__right--middle">
                                <h4>CONTACT INFORMATION</h4>
                                <h3>{warehouse.phone}{warehouse.contact_email}</h3>
                            </div>
                            <img src={edit} alt="edit" className='shrink2' />
                        </div>
                        <div className="warehouseContainer__far">
                            <div className="warehouseContainer__far--align">
                                <img src={del} alt="delete" className='shrink__hidden' />
                                <img src={edit} alt="edit" className='shrink2__hidden' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default WarehouseDetails;