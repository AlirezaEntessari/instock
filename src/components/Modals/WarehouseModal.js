import React from 'react';
import "./Modal.scss";
import XButton from '../../styles/assets/Icons/close-24px.svg';

const WarehouseModal = (props) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/warehouses/${props.selectedWarehouseId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 204) {
                props.delete();
                await deleteDataFromSeedFile(props.selectedWarehouseId);
            }

            props.handleClose();
        } catch (error) {
            console.error('Error deleting warehouse:', error);
        }
    };

    const deleteDataFromSeedFile = async (warehouseId) => {
        try {
            const seedData = require('../../../../instock-api/seeds/01_warehouses');

            const updatedSeedData = seedData.filter(item => item.id !== warehouseId);

            const fs = require('fs');
            const path = require('path');

            const seedFilePath = path.resolve(__dirname, '../../../instock-api/seeds/01_warehouses.js');
            fs.writeFileSync(seedFilePath, `module.exports = ${JSON.stringify(updatedSeedData, null, 2)};`);

            console.log('Seed data updated successfully.');
        } catch (error) {
            console.error('Error updating seed data:', error);
        }
    };


    return (
        <div className="modal">
            <div className="delete__modal">
                <h1 className="modal__header">Delete this warehouse?</h1>
                <p className="modal__text">
                    Please confirm that you'd like to delete this from the list of warehouses.
                    You won't be able to undo this action.
                </p>
                <button className="modal-cancel button" onClick={props.handleClose}>
                    Cancel
                </button>
                <button className="modal-delete button" onClick={handleDelete}>
                    Delete
                </button>
                <div onClick={props.closeModal}>
                    <img
                        className="modal__x-icon"
                        onClick={props.handleClose}
                        src={XButton}
                        alt="x button"
                    />
                </div>
            </div>
        </div>
    );
};

export default WarehouseModal;