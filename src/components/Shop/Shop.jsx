import { useEffect, useState } from 'react';
import { addToDB, getCartItem } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([])
    
    const [cart,setCart] = useState([])

    const  addToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDB(product.id);
    }
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getCartItem();
        console.log(storedCart);
    },[])

    return (
        <>
        <div className='shop-container'>
          <div className="products-container">
           {products.map(product =>
            <Product product={product} 
            key={product.id} handleAddToCart={addToCart}>
           </Product>)}
        </div>
           
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
        </div>
        </>
   
    );
};

export default Shop;