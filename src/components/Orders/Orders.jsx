import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const loadedProduct = useLoaderData();
    const {name,category,img,price,quantity} = loadedProduct;
    console.log(category)
    return (
        <div>
          <h1>Orders {loadedProduct.length}</h1>
            <img src={img} alt="" />
            <h2>Name :{name}</h2>
            <h3>Price :{price}</h3>
            <p>Category :{category}</p>
            <p>Quantity :{quantity}</p>
        </div>
    );
};

export default Orders;