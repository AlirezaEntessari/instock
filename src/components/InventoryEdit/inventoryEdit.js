import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryEdit.scss";
import { Link } from "react-router-dom";
import backIcon from "../../styles/assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../styles/assets/Icons/error-24px.svg";

const InventoryEdit = ({ id }) => {
    const [itemData, setItemData] = useState(null);
    const [warehouseID, setWarehouseID] = useState("");
    const [warehouseName, setWarehouseName] = useState("");
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8080/inventory/${id}`)
            .then((res) => {
                const item = res.data;
                setItemData(item);
                setWarehouseID(item.warehouseID);
                setWarehouseName(item.warehouseName);
                setItemName(item.itemName);
                setDescription(item.description);
                setCategory(item.category);
                setStatus(item.status);
                setQuantity(item.quantity);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleWarehouseChange = (e) => {
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <h1 className="inventory-edit__heading-title">Edit Inventory Item</h1>
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
                                value={itemName}
                                onChange={handleNameChange}
                                className="inventory-edit__text-input inventory-edit__item-name"
                            />
                        </label>
                        {itemName === "" && (
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
                                value={description}
                                onChange={handleDescriptionChange}
                                className="inventory-edit__text-input inventory-edit__description"
                            />
                        </label>
                        {description === "" && (
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
                                value={category}
                                onChange={handleCategoryChange}
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
                                {/* Radio button options for status */}
                            </div>
                        </div>
                        {status === "In Stock" && (
                            <label
                                htmlFor="quantity"
                                className="inventory-edit__form-label inventory-edit__quantity"
                            >
                                Quantity
                                <input
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    className="inventory-edit__text-input inventory-edit__item-quantity"
                                />
                            </label>
                        )}
                        {quantity === "" && (
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
                                value={warehouseID}
                                onChange={handleWarehouseChange}
                                className="inventory-edit__select-input inventory-edit__warehouses"
                            >
                                {/* Your warehouse options here */}
                            </select>
                        </label>
                        <label className="inventory-edit__form-label">
                            Warehouse Name
                            <input
                                type="text"
                                value={warehouseName}
                                readOnly
                                className="inventory-edit__text-input inventory-edit__warehouse-name"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className="inventory-edit__actions">
                <Link to="/inventory">
                    <button className="inventory-edit__button-cancel">Cancel</button>
                </Link>
                <button type="submit" className="inventory-edit__button-save">
                    Save
                </button>
            </div>
        </form>
    );
};

export default InventoryEdit;