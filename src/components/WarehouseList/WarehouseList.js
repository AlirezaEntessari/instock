import './WarehouseList.scss'
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WarehouseList() {
    const [ warehouses, setWarehouses ] = useState(null);



  useEffect(() => {
      const getWarehouses = async () => {
          try {
              const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/warehouses`);
              const info = response.data;
              setWarehouses(info);
          } catch (error) {
          console.log(error);
          }
      };
      getWarehouses();
  }, []);


    return (
        <section>
            <div className="container">
                <div className="warehouseContainer">
                    <div className="warehouseContainer__left">
                        <div className="warehouseContainer__left--start">
                            <h4>WAREHOUSE</h4>
                            <h2>ManHattan <img src={arrow} alt='arrow' className="warehouseContainer__left--img"/></h2>
                        </div>
                        <div className="warehouseContainer__left--middle">
                            <h4>ADDRESS</h4>
                            <h3>503 Broadway, NewYork, USA</h3>
                        </div>
                            <img src={del} alt="delete" className='shrink'/>
                    </div>
                    <div className="warehouseContainer__right">
                        <div className="warehouseContainer__right--start">
                            <h4>CONTACT NAME</h4>
                            <h3>Parmin Aujila</h3>
                        </div>
                        <div className="warehouseContainer__right">
                            <h4>CONTACT INFORMATION</h4>
                            <h3>+1(629)555-0129 paujila@instock.com</h3>
                        </div>
                            <img src={edit} alt="edit" className='shrink2'/>
                    </div>
                    <div className="warehouseContainer__far">
                            <img src={del} alt="delete" className='shrink__hidden'/>
                            <img src={edit} alt="edit" className='shrink2__hidden'/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="warehouseContainer">
                    <div className="warehouseContainer__left">
                        <div className="warehouseContainer__left--start">
                            <h4>WAREHOUSE</h4>
                            <h2>Washington <img src={arrow} alt='arrow' className="warehouseContainer__left--img"/></h2>
                        </div>
                        <div className="warehouseContainer__left--middle">
                            <h4>ADDRESS</h4>
                            <h3>33 Pearl Street SW, Washington, USA</h3>
                        </div>
                            <img src={del} alt="delete" className='shrink'/>
                    </div>
                    <div className="warehouseContainer__right">
                        <div className="warehouseContainer__right--start">
                            <h4>CONTACT NAME</h4>
                            <h3>Parmin Aujila</h3>
                        </div>
                        <div className="warehouseContainer__right">
                            <h4>CONTACT INFORMATION</h4>
                            <h3>+1(629)555-0129 paujila@instock.com</h3>
                        </div>
                            <img src={edit} alt="edit" className='shrink2'/>
                    </div>
                    <div className="warehouseContainer__far">
                            <img src={del} alt="delete" className='shrink__hidden'/>
                            <img src={edit} alt="edit" className='shrink2__hidden'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WarehouseList;