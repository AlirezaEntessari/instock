import "./InventoryList.scss"
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import sort from './../../styles/assets/Icons/sort-24px.svg';
import { Link } from 'react-router-dom';

const InventoryList = ( { inventories }) => {
    console.log(inventories)
    return (
<>
        <section>
            <div className="warehousetopcontainer">
                <h1>Inventory</h1>
                <input type="text" img className="warehousetopcontainer__bar" placeholder='   Search...'/>
                <Link to="/warehouses/add"><button className="warehousetopcontainer__button" input="submit">+ Add New Item</button></Link>
            </div>
            <div className="warehousetopcontainer__lower">
                <div className="warehousetopcontainer__lower--align--one">
                    <p>WAREHOUSE</p>
                    <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align--two">
                    <p>ADDRESS</p>
                    <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align--three">
                    <p>CONTACT NAME</p>
                    <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align--four">
                    <p>CONTACT INFORMATION</p>
                    <img src={sort} alt="sort" className="warehousetopcontainer__lower--img"/>
                </div>
                <div className="warehousetopcontainer__lower--align-five">
                    <p>ACTIONS</p>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                {inventories &&
                    inventories.map(inventory => (
                <div key={inventory.id} className="inventoryContainer">
                    <div className="inventoryContainer__left">
                        <div className="inventoryContainer__left--start">
                            <h4>Inventory</h4>
                            <div div className="inventoryContainer__left--start--align">
                            <h2>{inventory.item_name}</h2>
                            <img src={arrow} alt='arrow' className="inventoryContainer__left--img"/>
                            </div>
                        </div>
                        <div className="inventoryContainer__left--middle">
                            <h4>CATEGORY</h4>
                            <h3>{inventory.category}</h3>
                        </div>
                            <img src={del} alt="delete" className='shrink'/>
                    </div>
                    <div className="inventoryContainer__right">
                        <div className="inventoryContainer__right--start">
                            <h4>STATUS</h4>
                            <h3>{inventory.status}</h3>
                        </div>
                        <div className="inventoryContainer__right--middle">
                            <h4>QUANTITY</h4>
                            <h3>{inventory.quantity}</h3>
                        </div>
                        <div className="inventoryContainer__right--middle">
                            <h4>WAREHOUSE</h4>
                            <h3>{inventory.warehouse_name}</h3>
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
                ))}
            </div>
        </section>
        </>
    )
}

export default InventoryList;