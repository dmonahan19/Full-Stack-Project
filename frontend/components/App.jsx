import React from 'react'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Splash from './splash/splash_container'
import ProfileContainer from './profile/profile_container'
import ProfileFormContainer from './profile/profile_form_container'
import { ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

  const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <Route exact path="/" component={Splash} />
            <ProtectedRoute exact path="/users/:currentUserId" component={ProfileContainer}/>
            <ProtectedRoute exact path="/settings" component={ProfileFormContainer}/>
        </Switch>
    </div>
  );
  
  export default App;
