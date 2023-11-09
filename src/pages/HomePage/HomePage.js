import './HomePage.scss'
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseSearch from '../../components/WarehouseSearch/WarehouseSearch';


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