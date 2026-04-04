import React from 'react';
import { NavLink } from 'react-router';
import "./header.css"
const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;