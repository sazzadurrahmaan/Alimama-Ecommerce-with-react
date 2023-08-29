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
                <Link href="/shop">Shop</Link>
                <Link href="/order">Order</Link>
                <Link href="/inventory">Inventory</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
            
        </>
    );
};

export default Header;