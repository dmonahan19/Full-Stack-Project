import React from 'react'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Splash from './splash/splash_container'
import ProfileContainer from './profile/profile_container'
import FullProfileForm from './profile/full_profile_form'
import { ProtectedRoute } from '../util/route_util';
import BoardsContainer from './boards/boards_container'
import Modal from './modal/modal'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

  const App = () => (
    <div>
        <Modal />
        <header className='nav-container' >
            <NavBarContainer />
        </header>
        <Switch>
            <Route exact path="/" component={Splash} />
            <ProtectedRoute exact path="/users/:currentUserId" component={ProfileContainer}/>
            <ProtectedRoute exact path="/settings" component={FullProfileForm}/>
            <ProtectedRoute exact path="/:currentUserId/boards" component={BoardsContainer}/>
        </Switch>
    </div>
  );
  
  export default App;
