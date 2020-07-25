import React from 'react';
import s from './dialogs.module.css'
import DialogName from './dialogName/dialogName';


const Dialogs = () => {
    return (

        <div>
            <h1>Dialogs</h1>
            <div className='firstCol'>
                <div className='list'>
                    <DialogName  name='asdfasdf'/>

                </div>

            </div>
            <div className='secondcol'></div>
        </div>


    );
};

export default Dialogs;
