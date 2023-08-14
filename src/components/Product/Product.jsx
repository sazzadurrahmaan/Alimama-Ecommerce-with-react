import './Product.css'
const Product = (props) => {
    const {name,seller,ratings,img,price} = props.product;
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
            <button className='btn-cart'>Add to Cart</button>
            
        </div>
        </div>
    );
};

export default Product;