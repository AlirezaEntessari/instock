import './HomePage.scss'
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseSearch from '../../components/WarehouseSearch/WarehouseSearch';
import Header from '../../components/Header/Header';


function HomePage() {
    return (
        <body>
            <section className='warehousescontainer'>
            <WarehouseSearch />
            <WarehouseList />
            </section>
        </body>
    )
}

export default HomePage;