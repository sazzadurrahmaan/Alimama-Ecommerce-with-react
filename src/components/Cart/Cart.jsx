import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    for(const products of cart){
        totalPrice = totalPrice +products.price;
        totalShipping = totalShipping + products.shipping;
    }

    const tax = (totalPrice*5)/100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
              <h4>Order Summary</h4>
              <p>Selected Items :{cart.length} </p>
              <p>Total Price :${totalPrice}</p> 
              <p>Total Shipping Charge :${totalShipping}</p>
              <p>Tax : ${tax}</p>
              <h5>Grand Total :${grandTotal}</h5>
        </div>
    );
};

export default Cart;