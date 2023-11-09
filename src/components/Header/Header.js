import "./Header.scss"
import Logo from "../../styles/assets/Logo/InStock-Logo_1x.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="navbar">
            <nav className="navbar__container">
                <Link to="/">
                    <div className="navbar__logo"> <img src={Logo} /> </div>
                </Link>
                <div className="navbar__pages">
                    <Link>
                        <div><button className="navbar__page-1">Warehouses</button></div>
                    </Link>
                    <Link to="/inventory">
                        <div><button className="navbar__page-2">Inventory</button></div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
export default Header;