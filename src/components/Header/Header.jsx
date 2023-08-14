import './Header.css';
import logo from '../../assets/alimama.png'
const Header = () => {
    return (
        <>
        <nav className="header">
            <div className="left-nav">
                <img src={logo} alt="" />
            </div>
            <div className="right-nav">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
            
        </>
    );
};

export default Header;