import React from 'react';
import s from './item.module.css'
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <div className={s.navItem}>
            <NavLink to={props.href}>{props.item} </NavLink>
        </div>
    );
};

export default NavItem