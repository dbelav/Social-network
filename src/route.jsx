import React from 'react';
import Header from './components/Header/header';
import Navbar from './components/Nav/nav';
import Dialogs from './components/content/dialogs/dialog'
import Profile from './components/content/profile/profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DialogName from './components/content/dialogs/dialogName/dialogName';
import App from './App';

const Mar = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <Navbar />


                <Route exact path='/profile' component={Profile} />
                <Route path='/messeges' component={Dialogs} />
                <Route path='/messeges/1' component={DialogName} />


            </div>
        </BrowserRouter >
    );
}

export default Mar;
