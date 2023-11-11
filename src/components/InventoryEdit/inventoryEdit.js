import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryEdit.scss"
import { Link } from "react-router-dom";
import backIcon from "../../styles/assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../styles/assets/Icons/error-24px.svg";

const InventoryEdit = (props) => {
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
            .get(`http://localhost:8080/inventory/`)
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
    }, [props.match.params.id]);

    const handleNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleWarehouseChange = (e) => {
        props.warehouseNames.forEach((warehouse) => {
            if (warehouse.id === e.target.value) {
                setWarehouseID(e.target.value);
                setWarehouseName(warehouse.name);
            }
        });
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemName === "" || description === "" || quantity === "") {
            alert("Please fill in all the required fields!!!");
        } else if (quantity < 1) {
            alert("Quantity should be greater than 0");
        } else {
            axios
                .put(`http://localhost:8080/inventory/`, {
                    warehouseID,
                    warehouseName,
                    itemName,
                    description,
                    category,
                    status,
                    quantity,
                })
                .then((res) => {
                    props.history.push("/inventory");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    if (!itemData) {
        return <h1 className="loading">Loading...</h1>;
    }

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
                                {/* Your category options here */}
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
