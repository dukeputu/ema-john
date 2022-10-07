import React, { useState } from 'react';
import { useLoaderData,Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb'

const Orders = () => {
    const { products, storeCard } = useLoaderData(); //{products:products, storeCard: storeCard}
    const [cart, setCart] = useState(storeCard);
    const handelRemoverItemm = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const claerCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (

        <>
            <div className='shop-container'>
                <div className='orders-container'>
                    {cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoverItemm={handelRemoverItemm}
                    />)}
                    {
                        cart.length === 0 && <center><h2>No Cart Items, Please <Link to="/">Shop More</Link></h2></center>
                    }
                </div>
                <div className='cart-container'>
                    <Cart claerCart={claerCart} cart={cart} ></Cart>
                </div>
            </div>
        </>

    );
};

export default Orders;