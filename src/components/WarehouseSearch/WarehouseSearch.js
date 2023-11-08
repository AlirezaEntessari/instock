import './WarehouseSearch.scss'
import sort from './../../styles/assets/Icons/sort-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WarehouseSearch() {

    return (
        <section>
            <div className="warehousetopcontainer">
                <h1>Warehouses</h1>
                <input type="text" img className="warehousetopcontainer__bar" placeholder='   Search...'/>
                <button className="warehousetopcontainer__button" input="submit">Add New Warehouse</button>
            </div>
            <div className="warehousetopcontainer__lower">
                <div className="warehousetopcontainer__lower--align">
                <p>WAREHOUSE</p>
                <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align">
                <p>ADDRESS</p>
                <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align">
                <p>CONTACT NAME</p>
                <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align">
                <p>CONTACT INFORMATION</p>
                <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <p>ACTIONS</p>
            </div>
        </section>
    )
}

export default WarehouseSearch;