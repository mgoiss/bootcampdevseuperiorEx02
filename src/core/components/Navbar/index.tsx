import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => (
    <nav className="navbar-content">
        <Link to="/" className="navbar-logo-text">
            <h4> Bootcamp DevSuperior </h4>
        </Link>
    </nav>
);

export default Navbar;