import './AddWarehouse.scss'
import backarrow from './../../styles/assets/Icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AddWarehouse({ formSubmitHandler }) {
    const [formData, setFormData] = useState({
        warehouseName: "",
        streetAddress: "",
        city: "",
        country: "",
        contactName: "",
        position: "",
        phoneNumber: "",
        email: "",
      });
      const [error, setError] = useState("");
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!formData.warehouseName || !formData.streetAddress || !formData.city || !formData.country || !formData.contactName || !formData.position || !formData.phoneNumber || !formData.email) {
          setError("Please fill out form fields correctly");
          return;
        }
    
        setError(false);
    
        formSubmitHandler(event, formData.warehouseName, formData.streetAddress, formData.city, formData.country, formData.contactName, formData.position, formData.phoneNumber, formData.email);
      };

return (
    <section>
        <div className="containeradd">
            <div className="containeradd__header">
                <Link to="/"><img src={backarrow} className="containeradd__header--img" alt="back" /></Link>
                <h1>Add New Warehouse</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="warehouseaddContainer">
                <div className="warehouseaddContainer__left">
                    <p>Warehouse Details</p>
                    <div>
                        <h3>Warehouse Name</h3>
                        <input type="text" 
                        name="warehouseName" 
                        id="warehouseName" 
                        className="warehouseaddContainer__box"  
                        placeholder='   Warehouse Name'
                        value={formData.warehouseName}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <h3>Street Address</h3>
                        <input type="text" 
                        name="streetAddress" 
                        id="streetAddress" 
                        className="warehouseaddContainer__box" 
                        placeholder='   Street Address'
                        value={formData.streetAddress}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <h3>City</h3>
                        <input type="text" 
                        name="city"
                        id="city" 
                        className="warehouseaddContainer__box" 
                        placeholder='   City'
                        value={formData.city}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <h3>Country</h3>
                        <input type="text" 
                        name="country"
                        id="country" 
                        className="warehouseaddContainer__box" 
                        placeholder='   Country'
                        value={formData.country}
                        onChange={handleChange}/>
                    </div>
                </div>
                <div className="warehouseaddContainer__right">
                    <p>Contact Details</p>
                    <div>
                        <h3>Contact Name</h3>
                        <input type="text" 
                        name="contactName"
                        id="contactName" 
                        className="warehouseaddContainer__box" 
                        placeholder='   Contact Name'
                        value={formData.contactName}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <h3>Position</h3>
                        <input type="text" 
                        name="position"
                        id="position" 
                        className="warehouseaddContainer__box" 
                        placeholder='   Position'
                        value={formData.position}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <input type="text" 
                        name="phoneNumber"
                        id="phoneNumber"
                        className="warehouseaddContainer__box" 
                        placeholder='   Phone Number'
                        value={formData.phoneNumber}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="text" 
                        name="email"
                        id="email" 
                        className="warehouseaddContainer__box" 
                        placeholder='   Email'
                        value={formData.email}
                        onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className='warehouseaddContainer__buttons'>
                <button type="submit" value="submit" className="warehouseaddContainer__buttons--white">Cancel</button>
                <button type="submit" value="submit" className="warehouseaddContainer__buttons--blue">Add Warehouse</button>
                </div>
            </form>
            {error && alert("Unable to upload your warehouse")}
        </div>
    </section>
    )
}
export default AddWarehouse;