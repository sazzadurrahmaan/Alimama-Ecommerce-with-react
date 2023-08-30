import { getCartItem } from "../../utilities/fakeDB";

const cartProductLoader = async() =>{
    const loadedProduct = await fetch('products.json')
    const products = await loadedProduct.json();
    const storedCart = getCartItem();
    const savedCart = [];

    for (const id in storedCart){
        const addedProducts = products.find(product => product.id ===id);
        if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity =  quantity;
            savedCart.push(addedProducts);
        }
    }

    return savedCart;
}

export {cartProductLoader};