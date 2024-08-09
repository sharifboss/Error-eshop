import React, { useEffect, useState } from 'react';
import './Shop.css';
import data from '../../data/data.json';
import Product from '../Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [counts, setCount] = useState([]);
    const [cart,setCart]= useState([])
    useEffect(() => {
        setCount(data);
    }, []);
    const handleEvent=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
                <div className="product-container row">
                    {
                        counts.map(pd => (
                            <div className='col-md-5' key={pd.id}>
                                <Product handleEvent={handleEvent} product={pd}></Product>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-container">
                    <Cart counts={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;
