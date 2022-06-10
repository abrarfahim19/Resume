import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = ({product, addCart}) => {
    const {name , price, picture} = product;
    return (
        <div className='product-card'>
            <img src={picture} alt=""/>
            <div className='product-details'>
                <h3>Name: {name}</h3>
                <h4>Price: {price}</h4>

            </div>
            <button onClick={() => addCart(product)} className='add-cart align-items-center'>
                <p className='btn-text  my-2 mx-5'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;