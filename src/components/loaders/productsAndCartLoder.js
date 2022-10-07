import { getStoredCart } from "../../utilities/fakedb";

export const productAndCartLoader = async () => {
    //get product data
    const producstData = await fetch('products.json');
    const products = await producstData.json();

    //get cart
    const saveCart = getStoredCart();
    const storeCard = [];
    // console.log(products);
    // console.log('save cart', saveCart);
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity= quantity;
            storeCard.push(addedProduct);
            // console.log(id, quantity);
        }
        // console.log(id,addedProduct)
    }
    return {products:products, storeCard: storeCard};
}