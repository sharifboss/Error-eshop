import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart=props.counts
    const total=cart.reduce((total,prd)=>total+prd.price,0)
    return (
        <div className='container'>
            <h4>Order Summary</h4>
            <h5>Total order:{cart.length}</h5>
            <p>Total Price: {total} Taka</p>
            <button className='button'><FontAwesomeIcon icon={faBagShopping} /> Check Out</button>
        </div>
    );
};

export default Cart;