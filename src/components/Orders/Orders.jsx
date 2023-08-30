import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeItem } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import ReviewOrders from '../ReviewOrders/ReviewOrders';
import './Orders.css'
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

    return (
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
                </Cart>
            </div>

        </div>
    );
};

export default Orders;