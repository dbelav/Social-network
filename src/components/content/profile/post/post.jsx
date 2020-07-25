import React from 'react';
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.postItem}>
            <img src='https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png' alt='' />
            <div className='postInfo'>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Post;
