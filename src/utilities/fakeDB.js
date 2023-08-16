
const addToDB = id =>{
    let shoppingCart = getCartItem();

    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeItem = id =>{
    const shoppingCart = getCartItem();

    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
    }

}

const  getCartItem  = () =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
} 

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {addToDB,removeItem,getCartItem,deleteShoppingCart}