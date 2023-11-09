import './WarehouseDetails.scss';
import TrashIcon from '../../styles/assets/InStock Assets/Icons/delete_outline-24px.svg'
import EditIcon from '../../styles/assets/InStock Assets/Icons/edit-24px.svg';
import ArrowBack from '../../styles/assets/InStock Assets/Icons/arrow_back-24px.svg';

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
                <div className='warehouse-details__mobile'>
                    <div className="warehouse-details__mobile--row-1">
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Television</span> <span><button>IN STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Electronics</span> <span>500</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>
                    <div className='warehouse-details__mobile--row-2'>
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Gym Bag</span> <span><button>OUT OF STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Apparel</span> <span>0</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>
                    <div className="warehouse-details__mobile--row-3">
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Keychain</span> <span><button>IN STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Accessories</span> <span>2000</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>
                    <div className="warehouse-details__mobile--row--4">
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Shampoo</span> <span><button>IN STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Health</span> <span>4350</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>
                    <div className="warehouse-details__mobile--row--5">
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Phone Charger</span> <span><button>IN STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Electronics</span> <span>1000</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>
                    <div className="warehouse-details__mobile--row--6">
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Tent</span> <span><button>IN STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Gear</span> <span>800</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>
                    <div className="warehouse-details__mobile--row--7">
                        <p><span>INVENTORY ITEM</span> <span>STATUS</span></p>
                        <p><span>Winter Jacket</span> <span><button>OUT OF STOCK</button></span></p>
                        <p><span>CATEGORY</span> <span>QTY</span></p>
                        <p><span>Apparel</span> <span>0</span></p>
                        <img src={TrashIcon} alt="Trash Icon" />
                    </div>

                </div>
                <div className="warehouse-details__table">
                   <table>
                        <tr>
                            <th>INVENTORY ITEM</th>
                            <th>CATEGORY</th>
                            <th>STATUS</th>
                            <th>QUANTITY</th>
                            <th>ACTIONS</th>
                        </tr>
                        <tr>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td><button>IN STOCK</button></td>
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
                            <td><button>IN STOCK</button></td>
                            <td>2000</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Shampoo</td>
                            <td>Health</td>
                            <td><button>IN STOCK</button></td>
                            <td>4350</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Phone Charger</td>
                            <td>Electronics</td>
                            <td><button>IN STOCK</button></td>
                            <td>10000</td>
                            <td><span><img src={TrashIcon} alt="Trash Icon" /></span> <span><img src={EditIcon} alt="Edit Icon" /></span></td>
                        </tr>
                        <tr>
                            <td>Tent</td>
                            <td>Gear</td>
                            <td><button>IN STOCK</button></td>
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