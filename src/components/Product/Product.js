import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {image,amount,price}=props.product
    return (
        <div className='product'>
            <div>
                <img src={image} alt="" />

            </div>
            <div className='price'>
                <h4>{amount} UC</h4>
                <h3>{price} Taka</h3>
                <button onClick={()=>props.handleEvent(props.product)} className='button'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;