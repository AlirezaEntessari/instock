import './WarehouseDetails.scss';

export const WarehouseDetails = () => {

    return (
        <>

            <div className="warehouse-details">
                <div className="warehouse-details__header">
                    <h1>Washington</h1>
                    <button>Edit</button>
                </div>
                <div className="warehouse-details__information">
                    <div className="warehouse-details__information--address">
                        <h3>WAREHOUSE ADDRESS: </h3>
                        <p>33 Pearl Street SW,</p>
                        <p>Washington, USA</p>
                    </div>
                    <div className="warehouse-details__information--contact-name">
                        <h3>CONTACT NAME: </h3>
                        <p>Graeme Lyon</p>
                        <p>Warehouse Manager</p>
                    </div>
                    <div className="warehouse-details__information--contact-information">
                        <h3>CONTACT INFORMATION: </h3>
                        <p>+1 (647) 504-0911</p>
                        <p>glyon@instock.com</p>
                    </div>
                </div>
            </div>

        
        
        </>
    )

}