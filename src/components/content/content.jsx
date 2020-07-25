import React from 'react';
import s from './content.module.css'
import Profile from './profile/profile';


const Content = () => {
    return (
        <div className={s.content}>
            <Profile />
        </div>
    );
};

export default Content;