import React from 'react'
import { Link } from 'react-router-dom'
import s from './dialogName.module.css'

const DialogName = (props) => {
    return (
        <div className={s.name}><Link to={`/messeges/` + props.name}>{props.name}</Link></div>
    );
};

export default DialogName;
