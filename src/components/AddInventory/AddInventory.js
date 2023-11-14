import './AddInventory.scss';
import backarrow from './../../styles/assets/Icons/arrow_back-24px.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backIcon from "../../styles/assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../styles/assets/Icons/error-24px.svg";

export default function AddInventory () {
	const [formData, setFormData] = useState({
        itemName: "",
        description: "",
        category: "Electronics",
        stockStatus: "",
        quantity: "",
        warehouse: "5",
      });
      const [error, setError] = useState("");

	  const [warehouses, setWarehouses] = useState([])

	  useEffect(() => {
		const getWarehouses = async() => {
			const response = await axios.get('http://localhost:8080/api/warehouses');
			const data=response.data;
			const warehousesArray = [];
			for (const warehouse of data) {
				warehousesArray.push(warehouse.id);
			}
			setWarehouses(warehousesArray);

		}
		getWarehouses();
	  }, [])
    
      const handleChange = (event) => {
		const target = event.target;
		const name = event.target.name
		const value = target.value;
		// const value = target.type === 'radio' ? target.checked : target.value;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
	  const formSubmitHandler = async (e, warehouse, itemName, description, category, status, quantity) => {
        e.preventDefault();
		if (status === "Out of Stock") quantity = '0';

        await axios.post(`http://localhost:8080/api/inventories/`, {
            warehouse_id: warehouse,
            item_name: itemName,
            description: description,
            category: category,
            status: status,
            quantity: quantity,
        });
    };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!formData.itemName || !formData.description || !formData.category || !formData.stockStatus || !formData.warehouse) {
          setError("Please fill out form fields correctly");
          return;
        }
    
        setError(false);
    
        formSubmitHandler(event, formData.warehouse, formData.itemName, formData.description, formData.category, formData.stockStatus, formData.quantity);
      };

return (
        <form className="inventory-edit" onSubmit={handleSubmit}>
            <div className="inventory-edit__heading">
                <Link to="/inventory">
                    <img
                        src={backIcon}
                        alt="back icon"
                        className="inventory-edit__back-icon"
                    />
                </Link>
                <h1 className="inventory-edit__heading-title">Add Inventory Item</h1>
            </div>
            <div className="inventory-edit__inputs">
                <div className="inventory-edit__details">
                    <h2 className="inventory-edit__details-heading">Item Details</h2>
                    <div className="inventory-edit__details-form">
                        <label htmlFor="itemName" className="inventory-edit__form-label">
                            Item Name
                            <input
                                type="text"
                                required
                                name="itemName"
                                value={formData.itemName}
                                onChange={handleChange}
                                className="inventory-edit__text-input inventory-edit__item-name"
                            />
                        </label>
                        {formData.itemName === "" && (
                            <div className="inventory-edit__warning">
                                <img
                                    src={errorIcon}
                                    alt="error icon"
                                    className="inventory-edit__error-icon"
                                />
                                <p className="inventory-edit__warning-text">
                                    This field is required
                                </p>
                            </div>
                        )}
                        <label className="inventory-edit__form-label">
                            Description
                            <textarea
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="inventory-edit__text-input inventory-edit__description"
                            />
                        </label>
                        {formData.description === "" && (
                            <div className="inventory-edit__warning">
                                <img
                                    src={errorIcon}
                                    alt="error icon"
                                    className="inventory-edit__error-icon"
                                />
                                <p className="inventory-edit__warning-text">
                                    This field is required
                                </p>
                            </div>
                        )}
                        <label className="inventory-edit__form-label">
                            Category
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="inventory-edit__select-input inventory-edit__category"
                            >
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Health">Health</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="inventory-edit__availability">
                    <h2 className="inventory-edit__availability-heading">
                        Item Availability
                    </h2>
                    <div className="inventory-edit__availability-form">
                        <div className="inventory-edit__radio-group">
                            <label className="inventory-edit__form-label inventory-edit__radio-label">
                                Status
                            </label>
                            <div className="inventory-edit__radio-buttons">
								<fieldset className='fieldset'>
								<input type="radio" id="instock" name="stockStatus" value='In Stock' onChange={handleChange} />
								<label for="instock">In Stock</label>

								<input type="radio" id="outofstock" name="stockStatus" value='Out of Stock' onChange={handleChange}/>
								<label for="outofstock">Out Of Stock</label>
								</fieldset>
                            </div>
                        </div>
                        {formData.stockStatus === "In Stock" && (
                            <label
                                htmlFor="quantity"
                                className="inventory-edit__form-label inventory-edit__quantity"
                            >
                                Quantity
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="inventory-edit__text-input inventory-edit__item-quantity"
                                />
                            </label>
                        )}
                        {formData.quantity === "" && (
                            <div className="inventory-edit__warning">
                                <img
                                    src={errorIcon}
                                    alt="error icon"
                                    className="inventory-edit__error-icon"
                                />
                                <p className="inventory-edit__warning-text">
                                    This field is required
                                </p>
                            </div>
                        )}
                        <label className="inventory-edit__form-label">
                            Warehouse
                            <select
								name="warehouse"
                                value={formData.warehouse}
                                onChange={handleChange}
                                className="inventory-edit__select-input inventory-edit__warehouses"
                            >
                                {warehouses && warehouses.map(warehouse => {
									return <option value={warehouse}>{warehouse}</option>
								})}
                            </select>
                        </label>
                        
                    </div>
                </div>
            </div>
            <div className="inventory-edit__actions">
                <Link to="/inventory">
                    <button className="inventory-edit__button-cancel">Cancel</button>
                </Link>
                <button type="submit" className="inventory-edit__button-save">
                    + Add
                </button>
            </div>
        </form>
    );
}