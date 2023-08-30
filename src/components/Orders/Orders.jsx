import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewOrders from '../ReviewOrders/ReviewOrders';
import './Orders.css'
const Orders = () => {
    const cart = useLoaderData();
    
    return (
        <div className='orders'>
            <div className='review-orders'>
                {cart.map(product => <ReviewOrders
                    product = {product} key ={product.id}
                ></ReviewOrders>)}
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
  
        </div>
    );
};

export default Orders;