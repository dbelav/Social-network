import React from 'react';
import s from './profile.module.css'
import Post from './postName/post';

const Profile = (props) => {
    let userMesseges = props.state.posts.map(item => <Post name={item.name} message={item.message} />)
    
    let newPostItem = React.createRef()
    let addPosts = () => {
        let text = newPostItem.current.value
        props.addPost(text)
    }
    return (
        <div>
            <div className='bgimage'></div>
            <div>
                <textarea ref={newPostItem}></textarea>
            </div>
            <div>
                <button onClick={addPosts}>Кнопка</button>
            </div>
            {userMesseges}
        </div>
    );
};

export default Profile;
