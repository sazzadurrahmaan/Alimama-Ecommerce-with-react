import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,seller,ratings,img,price} = props.product;
  
    const addToCart= props.handleAddToCart;
  
    return (
        <div>
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price : $ {price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings}</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            
        </div>
        </div>
    );
};

export default Product;