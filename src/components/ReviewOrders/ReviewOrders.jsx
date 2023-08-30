import React from 'react';
import './ReviewOrders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewOrders = ({ product }) => {
    const { img, name, shipping, price } = product;

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
                        <button><FontAwesomeIcon className="icon-delete" icon={faTrashAlt} /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewOrders;