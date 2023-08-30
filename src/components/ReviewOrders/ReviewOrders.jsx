import React from 'react';
import './ReviewOrders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewOrders = ({ product,handleCart }) => {
    const { id,img, name, shipping, price } = product;
    const removeFromCart = handleCart;
    return (
        <div>
            <div className="order-review">
                <img src={img} alt="" />
                <div className="order-info">
                    <div className="order-info-text">
                        <p>{name}</p>
                        <p>Price :<span className='orange-text'>${price}</span></p>
                        <p>Shipping Charge :<span className='orange-text'>${shipping}</span></p>
                    </div>
                    <div className="delete-btn">
                        <button onClick={()=>removeFromCart(id)}><FontAwesomeIcon className="icon-delete" icon={faTrashAlt} /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewOrders;