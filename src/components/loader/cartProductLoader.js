const cartProductLoader = async() =>{
    const loadedProduct = await fetch('products.json')
    const product = await loadedProduct.json();
    return product;
}

export {cartProductLoader};