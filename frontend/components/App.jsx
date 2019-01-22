import React from 'react'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
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

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    
    </div>
  );
  
  export default App;