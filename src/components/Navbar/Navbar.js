import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../image/2.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='newEdit'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;