import React from 'react';
import './ReviewOrders.css'
const ReviewOrders = ({product}) => {
    const {img,name,shipping,price} = product;

    return (
        <>
       
        <div className='review-orders'>
            <div className="order-info">
                <img src={img} alt="" />
                <div className="order-info-text">
                    <h5>{name}</h5>
                    <p>Price :{price}$</p>
                    <p>Shipping Charge {shipping}$</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ReviewOrders;