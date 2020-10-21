import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import { addPost } from './redux/state'
import { sub } from './redux/state'

let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(state)

// sub(rerenderEntireTree)



serviceWorker.unregister();

