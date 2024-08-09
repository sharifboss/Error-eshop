import React from 'react';
import logo from '../../image/1.png'
import './Header.css'
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <Navbar></Navbar>
            
        </div>
    );
};

export default Header;