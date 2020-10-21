import React from 'react';
import DialogName from '../dialogName/dialogName';
import s from './dialogMesseges.module.css'



const DialogMessages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>


    );
};

export default DialogMessages;




