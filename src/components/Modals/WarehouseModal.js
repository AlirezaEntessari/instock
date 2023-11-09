import React from 'react';
import "../../components/Modals/Modal.scss";
import XButton from '../../styles/assets/Icons/close-24px.svg';

const WarehouseModal = (props) => {
    return (
        <>
            <div className="modal">
                <div className="delete__modal">
                    <h1 className="modal__header">Delete this warehouse?</h1>
                    <p className="modal__text">Please confirm that you'd like to delete this from the list of warehouses. You won't be able to undo this action.</p>
                    <button className="modal-cancel button" onClick={props.closeModal}>Cancel</button>
                    <button className="modal-delete button" onClick={props.delete}>Delete</button>
                    <a href="/" onClick={props.closeModal}>
                        <img className="modal__x-icon" src={XButton} alt="x button" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default WarehouseModal;