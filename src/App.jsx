import React from 'react';
import Header from './components/Header/header';
import Navbar from './components/Nav/nav';
import Dialogs from './components/content/dialogs/dialog'
import Profile from './components/content/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogName from './components/content/dialogs/dialogName/dialogName';
import Mar from './route';

const App = () => {
    return (
    //     <BrowserRouter>
    //         <div className='wrapper'>
    //             <Header />
    //             <Navbar />
    //             <div className='appWrapperContent'>
    //                 <Route path='/profile' component={Profile} />
    //                 <Route path='/messeges' component={Dialogs} >
    //                     <Route path='/messeges/1' component={DialogName} />
    //                 </Route>

    //             </div>
    //         </div>
    //     </BrowserRouter>
    // );
        <Mar />
    )
}

export default App;
