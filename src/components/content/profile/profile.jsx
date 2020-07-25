import React from 'react';
import s from './profile.module.css'
import Post from './post/post';


const Profile = () => {
    return (
        <div>
            <div className='bgimage'></div>
            <Post name='asdasd' text='asdasd asda a'/>
            <Post name='zxcv' text='adfa adsfdsaf '/>
        </div>
    );
};

export default Profile;