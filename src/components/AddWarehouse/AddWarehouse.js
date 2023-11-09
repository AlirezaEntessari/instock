import './AddWarehouse.scss'
function AddWarehouse() {

return (
    <section>
        <div className="containeradd">
            <div className="warehouseaddContainer">
                <div className="warehouseaddContainer__left">
                    <p>Warehouse Details</p>
                    <div>
                        <h3>Warehouse Name</h3>
                        <input type="text" className="warehouseaddContainer__box"  placeholder='   Warehouse Name'/>
                    </div>
                    <div>
                        <h3>Street Address</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Street Address'/>
                    </div>
                    <div>
                        <h3>City</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   City'/>
                    </div>
                    <div>
                        <h3>Country</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Country'/>
                    </div>
                </div>
                <div className="warehouseaddContainer__right">
                    <p>Contact Details</p>
                    <div>
                        <h3>Contact Name</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Contact Name'/>
                    </div>
                    <div>
                        <h3>Position</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Position'/>
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Phone Number'/>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="text" className="warehouseaddContainer__box" placeholder='   Email'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AddWarehouse;