import './WarehouseDetails.scss';
import TrashIcon from '../../styles/assets/Icons/delete_outline-24px.svg';
import EditIcon from '../../styles/assets/Icons/edit-24px.svg';
import ArrowBack from '../../styles/assets/Icons/arrow_back-24px.svg';
import RightArrow from '../../styles/assets/Icons/chevron_right-24px.svg';

export const WarehouseDetails = () => {

    return (
        <>
            <div className="warehouse-details">
                <div className="warehouse-details__header">
                    <div className="warehouse-details__header--title">
                        <h1 className='warehouse-details__header--title__h1'> <span><img src={ArrowBack} alt="Arrow Back"/></span> Washington</h1>
                        <img className='warehouse-details__header--title__img' src={EditIcon} alt="Edit Icon" />
                        <div className='warehouse-details__header--title__div'></div>
                        <button className='warehouse-details__header--title__button'>Edit</button>
                    </div>
                </div>
                <div className="warehouse-details__information">
                    <div className="warehouse-details__information--address">
                        <h3>WAREHOUSE ADDRESS: </h3>
                        <p>33 Pearl Street SW, Washington, USA</p>
                    </div>
                    <div className="warehouse-details__information--table-container">
                        <table className='warehouse-details__information--table'>
                            <tr className='warehouse-details__information--table-row'>
                                <td>CONTACT NAME: </td>
                                <td>CONTACT INFORMATION: </td>
                            </tr>
                            <tr>
                                <td>Graeme Lyon</td>
                                <td>+1 (647) 504-0911</td>
                            </tr>
                            <tr>
                                <td>Warehouse Manager</td>
                                <td>glyon@instock.com</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='warehouse-details__mobile'>
                    <div className="warehouse-details__mobile-row">
                        <table className='warehouse-details__mobile-table'>
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Television <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            </tr>
                            <tr>
                                <td>CATEGORY</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Electronics</td>
                                <td>500</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                            
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className='warehouse-details__mobile-table'>
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Gym Bag <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__out-of-stock'>OUT OF STOCK</button></td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Gear</td>
                                <td>0</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className='warehouse-details__mobile-table'>
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Hoodie <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__out-of-stock'>OUT OF STOCK</button></td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Apparel</td>
                                <td>0</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className='warehouse-details__mobile-table'>
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Keychain <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            </tr>
                            <tr>
                                <td>CATEGORY</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>2000</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className='warehouse-details__mobile-table'>
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Shampoo <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            </tr>
                            <tr>
                                <td>CATEGORY</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Health</td>
                                <td>4350</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className="warehouse-details__mobile-table">
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Phone Charger <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            </tr>
                            <tr>
                                <td>CATEGORY</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Electronics</td>
                                <td>10000</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className="warehouse-details__mobile-table">
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Tent <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            </tr>
                            <tr>
                                <td>CATEGORY</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Gear</td>
                                <td>800</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>
                    <div className="warehouse-details__mobile-row">
                        <table className="warehouse-details__mobile-table">
                            <tr>
                                <td>INVENTORY ITEM</td>
                                <td>STATUS</td>
                            </tr>
                            <tr>
                                <td>Winter Jacket <img className='warehouse-details__arrow' src={RightArrow} alt="Right Arrow" /></td>
                                <td><button className='warehouse-details__out-of-stock'>OUT OF STOCK</button></td>
                            </tr>
                            <tr>
                                <td>CATEGORY</td>
                                <td>QTY</td>
                            </tr>
                            <tr>
                                <td>Apparel</td>
                                <td>0</td>
                            </tr>
                            <div className='warehouse-details__mobile--footer'>
                                <img className='warehouse-details__mobile--trash-icon' src={TrashIcon} alt="Trash Icon" />
                                <img className='warehouse-details__mobile--edit-icon' src={EditIcon} alt="Edit Icon" />
                            </div>
                        </table>
                    </div>


                </div>
                <div className="warehouse-details__container">
                   <table className='warehouse-details__table'>
                        <tr>
                            <td>INVENTORY ITEM</td>
                            <td>CATEGORY</td>
                            <td>STATUS</td>
                            <td>QUANTITY</td>
                            <td>ACTIONS</td>
                        </tr>
                        <tr>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            <td>500</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Gym Bag</td>
                            <td>Gear</td>
                            <td><button>OUT OF STOCK</button></td>
                            <td>0</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Hoodie</td>
                            <td>Apparel</td>
                            <td><button>OUT OF STOCK</button></td>
                            <td>0</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Keychain</td>
                            <td>Accessories</td>
                            <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            <td>2000</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Shampoo</td>
                            <td>Health</td>
                            <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            <td>4350</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Phone Charger</td>
                            <td>Electronics</td>
                            <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            <td>10000</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Tent</td>
                            <td>Gear</td>
                            <td><button className='warehouse-details__in-stock'>IN STOCK</button></td>
                            <td>800</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Winter Jacket</td>
                            <td>Apparel</td>
                            <td><button>OUT OF STOCK</button></td>
                            <td>0</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                   </table>
                </div>
            </div>

        
        
        </>
    )

}