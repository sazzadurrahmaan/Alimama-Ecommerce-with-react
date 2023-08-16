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
        //step -1: get id
        for(const id in storedCart){
            //step -2 :get the product using id;
            const addedProduct = products.find(product => product.id ===id);
       // console.log(storedProduct)
       //step -3 :quantity of the product

       const quantity = storedCart[id];
       addedProduct.quantity= quantity;
       console.log(quantity);
        }
    },[products])

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