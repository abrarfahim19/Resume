import React from 'react';

import'./Shoppingcart.css'

const Cart = ({cart, deleteCart, randomSelected}) => {
    
    return (
        <div className='cart'>
            <div>Shopping-cart</div>
            <div>
            {
                cart.map(product => <div key={product.id} className='product-div'>
                    <img height='30' src={product.picture} alt=""/> 
                    <p className='fw-bold'>{product.name}</p>
                    </div>)
            }
            </div>
            <div >
                <button onClick={randomSelected} data-bs-toggle="modal" data-bs-target="#exampleModal">Select Random One</button>
                <button onClick={deleteCart}>Delete Cart</button>
            </div>
        </div>
    );
};

export default Cart;