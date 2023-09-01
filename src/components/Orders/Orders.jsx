import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeItem } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import ReviewOrders from '../ReviewOrders/ReviewOrders';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
const Orders = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleCart = (id) => {

        const remaining = cart.filter(product => product.id !== id);

        setCart(remaining);
        removeItem(id);
    }

    const removeAllCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    let message;
    if(cart.length ===0){
        message = <h1>Please Add Product To Cart</h1>
    }
    return (
        <>
        {message}
           <div className='orders'>
     
     <div className='review-orders'>
         {cart.map(product => <ReviewOrders
             product={product} key={product.id}
             handleCart={handleCart}
         ></ReviewOrders>)}
     </div>
     <div>
         <Cart
             cart={cart}
             removeAllCart = {removeAllCart}  > 
        <Link to="/checkout"> <button className='btn-proceed'>Proceed Checkout   <FontAwesomeIcon  icon={faStepForward} /></button></Link>
         </Cart>
     </div>

 </div>
        </>
     
    );
};

export default Orders;