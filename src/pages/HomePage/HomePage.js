import './HomePage.scss'
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseSearch from '../../components/WarehouseSearch/WarehouseSearch';


function HomePage() {
    return (
        <body>
            <WarehouseSearch />
            <WarehouseList />
        </body>
    )
}

export default HomePage;