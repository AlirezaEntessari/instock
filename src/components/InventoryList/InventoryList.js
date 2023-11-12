import "./InventoryList.scss"
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';
import sort from './../../styles/assets/Icons/sort-24px.svg';
import { Link } from 'react-router-dom';

const InventoryList = ({ inventories }) => {
    console.log(inventories)
    return (
        <>
            <section>
                <div className="inventorytopcontainer">
                    <h1>Inventory</h1>
                    <input type="text" img className="inventorytopcontainer__bar" placeholder='   Search...' />
                    <Link to="/inventory/add"><button className="inventorytopcontainer__button" input="submit">+ Add New Item</button></Link>
                </div>
                <div className="inventorytopcontainer__lower">
                    <div className="inventorytopcontainer__lower--align--one">
                        <p>INVENTORY ITEM</p>
                        <img src={sort} alt="sort" className="inventorytopcontainer__lower--img" />
                    </div>
                    <div className="inventorytopcontainer__lower--align--two">
                        <p>CATEGORY ITEM</p>
                        <img src={sort} alt="sort" className="inventorytopcontainer__lower--img" />
                    </div>
                    <div className="inventorytopcontainer__lower--align--three">
                        <p>STATUS</p>
                        <img src={sort} alt="sort" className="inventorytopcontainer__lower--img" />
                    </div>
                    <div className="inventorytopcontainer__lower--align--four">
                        <p>QTY</p>
                        <img src={sort} alt="sort" className="inventorytopcontainer__lower--img" />
                    </div>
                    <div className="inventorytopcontainer__lower--align--five">
                        <p>WAREHOUSE</p>
                        <img src={sort} alt="sort" className="inventorytopcontainer__lower--img" />
                    </div>
                    <div className="inventorytopcontainer__lower--align--six">
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
                                            <Link to={`/inventory/${inventory.id}`}><h2>{inventory.item_name}</h2></Link>
                                            <img src={arrow} alt='arrow' className="inventoryContainer__left--img" />
                                        </div>
                                    </div>
                                    <div className="inventoryContainer__left--middle">
                                        <h4>CATEGORY</h4>
                                        <h3>{inventory.category}</h3>
                                    </div>
                                    <img src={del} alt="delete" className='shrink' />
                                </div>
                                <div className="inventoryContainer__right">
                                    <div className="inventoryContainer__right--start">
                                        <h4>STATUS</h4>
                                        <button className={inventory.status === "In Stock" ? "inventory-item__status--instock" : "inventory-item__status--outstock"}>{inventory.status}</button>
                                    </div>
                                    <div className="inventoryContainer__right--middle">
                                        <h4>QUANTITY</h4>
                                        <h3 className="iventoryItem--2">{inventory.quantity}</h3>
                                    </div>
                                    <div className="inventoryContainer__right--middle">
                                        <h4>WAREHOUSE</h4>
                                        <h3 className="iventoryItem--3">{inventory.warehouse_name}</h3>
                                    </div>
                                    <img src={edit} alt="edit" className='shrink2' />
                                </div>
                                <div className="inventoryContainer__far">
                                    <div className="inventoryContainer__far--align">
                                        <Link to={`/inventory/${inventory.id}`}>
                                            <img src={del} alt="delete" className='shrink__hidden' />
                                        </Link>
                                        <Link to={`/inventory/${inventory.id}`}>
                                            <img src={edit} alt="edit" className='shrink2__hidden' />
                                        </Link>
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