import React from 'react';
import s from './dialogName.module.css'
import { Link } from 'react-router-dom';



const DialogName = (props) => {
    return (
        <div>

                <Link to='/messeges/1'>{props.name}</Link>

                {/* <NavLink to='/messeges/1'>gfhgjfhghjf</NavLink>
                <NavLink to='/messeges/2'>hhghfghfgh</NavLink> */}

        </div>

    );
};

export default DialogName;
