import './HomePage.scss'
import del from './../../styles/assets/InStock Assets/Icons/delete_outline-24px.svg';
import edit from './../../styles/assets/InStock Assets/Icons/edit-24px.svg';


function HomePage() {
    return (
        <body>
            <section>
                <div classname="warehouseContainer">
                    <div className="warehouseContainer__left">
                        <div>
                            <h4>WAREHOUSE</h4>
                            <h3>ManHattan</h3>
                        </div>
                        <div>
                            <h4>ADDRESS</h4>
                            <h3>33 Pearl Street SW, Washington, USA</h3>
                        </div>
                            <img src={''} alt="delete" className='shrink'/>
                    </div>
                    <div className="warehouseContainer__right">
                    <div>
                            <h4>CONTACT NAME</h4>
                            <h3>PARMIN AUJILA</h3>
                        </div>
                        <div>
                            <h4>CONTACT INFORMATION</h4>
                            <h3>+1(629)555-0129 paujila@instock.com</h3>
                        </div>
                            <img src={''} alt="edit" className='shrink'/>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default HomePage;