import './Header.css';
import logo from '../../assets/alimama.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
        <nav className="header">
            <div className="left-nav">
                <img src={logo} alt="" />
            </div>
            <div className="right-nav">
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
            
        </>
    );
};

export default Header;