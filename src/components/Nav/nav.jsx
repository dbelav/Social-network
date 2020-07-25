import React from 'react';
import s from './nav.module.css';
import NavItem from './nav-item/item';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavItem item='Profile' href='profile'/>
            <NavItem item='Messeges' href='messeges'/>
            <NavItem item='News' href='news'/>
            <NavItem item='Music' href='music'/>
            <NavItem item='Setting' href='setting'/>

        </nav>
    );
};

export default Navbar;
