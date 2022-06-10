import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Shoppingcart from '../Shoppingcart/Shoppingcart';
import Display from '../Display/Display';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState({name:'Select one!'})

    console.log(random)
    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    //Add cart
    const addCart = (product)=> {
        const checkprod = cart.find(item => item.index === product.index)
        if (checkprod){
            const newCart = [...cart];
            setCart(newCart)
        }
        else {
        const newCart = [...cart, product];
        setCart(newCart)
        }
    }

    // Delete Cart
    const deleteCart = () =>{
        setCart([])
    }

    function ultaPalta(ar) {
        for (let i = ar.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ar[i], ar[j]] = [ar[j], ar[i]];
        }
    }

    const randomSelected = () =>{
        if (!Empty(cart)){
            const NewCart = [...cart]
            ultaPalta(NewCart);
            setRandom(NewCart[0])
        }
        else {
            setRandom({name:"You haven't select one",img:''})
        }

    }

    // if its zero we cant generate item
    function Empty(item) {
        return Object.keys(item).length === 0;
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product => <Products key={product.index} product={product} addCart={addCart} ></Products>)
            }
            </div>
            <div className='cart-container'>
                <Shoppingcart cart={cart} deleteCart={deleteCart} randomSelected={randomSelected} ></Shoppingcart>
            </div>
            <div>{
                <Display random={random}></Display>
                }
            </div>
        </div>
    );
};

export default Shop;