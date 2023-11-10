import "./InventoryList.scss"
import arrow from './../../styles/assets/Icons/chevron_right-24px.svg';
import del from './../../styles/assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/Icons/edit-24px.svg';

const InventoryList = ( { inventories }) => {
    console.log(inventories)
    return (
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
                ))}
            </div>
        </section>
    )
}

export default InventoryList;