import React from 'react';
import s from './dialog.module.css'
import DialogName from './dialogName/dialogName';
import DialogMesseges from './dialogMesseges/dialogMesseges';



const Dialog = (props) => {
    let name = props.state.dialogs.map(item => <DialogName name={item.name}></DialogName>)
    let message = props.state.messages.map(item => <DialogMesseges message={item.message}></DialogMesseges>)

    return (
        <div className={s.container}>
            <h1>Dialogs</h1>
            <div className={s.firstCol}>
                {name}
            </div>
            <div className={s.secondcol}>
                {message}
            </div>
        </div>


    );
};

export default Dialog;
