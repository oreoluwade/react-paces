import React from 'react';
import { Link } from '@reach/router';
import './navbar.scss';

const Navbar = () => {
    return (
        <ul className="navlinks-group">
            <li className="navlink">
                <Link to="/">Home</Link>
            </li>
            <li className="navlink">
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    );
};

export default Navbar;
