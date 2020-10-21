import React from 'react'
import Header from './components/Header/header'
import Navbar from './components/Nav/nav'
import Dialog from './components/content/dialogs/dialog'
import Profile from './components/content/profile/profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import s from './style.module.css'


const App = (props) => {

    return (
        <Router>
            <div className={s.wrapper}>
                <Header />
                <Navbar />
                <div className={s.appWrapperContent}>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
                    <Route path='/messeges' render={() => <Dialog state={props.state.dialogsPage} />} >
                    </Route>

                </div>
            </div>
        </Router>
    );
}

export default App; 