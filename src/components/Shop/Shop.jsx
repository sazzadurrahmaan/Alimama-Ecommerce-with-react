import { useEffect, useState } from 'react';
import { addToDB, getCartItem } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product];

        // let newCart = [];

        // const exists = cart.find(pd => pd.id ===product.id);

        // if(!exists){
        //     product.quantity = 1;
        //     newCart = [...cart,product];
        // }
        // else{
        //     exists.quantity = exists.quantity +1;
        //     const remaining = cart.filter(pd => pd.id !==product.id);
        //     newCart = [...remaining,exists];
        // }
        setCart(newCart);
        addToDB(product.id);
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
         //step -1: get id
        const storedCart = getCartItem();
        
        const savedCart = [];
        
        //step -2 :get the product using id;
        for (const id in storedCart) {
          const addedProduct = products.find(product => product.id === id);
      
        //step -3 :quantity of the product
        if(addedProduct){
            const quantity = storedCart[id];

            addedProduct.quantity = quantity;

        //step -4: push added product to saved cart
            savedCart.push(addedProduct);
        }

     } 
     setCart(savedCart);
    }, [products])

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