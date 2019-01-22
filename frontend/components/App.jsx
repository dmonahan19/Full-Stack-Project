import React from 'react'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import LoginSignup from '../components/session_form/login_signup'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';

  const App = () => (
    <div>
        {/* <header>
            <NavBarContainer />
        </header> */}

        <Route path="/" component={LoginSignup} />
       
    
    </div>
  );
  
  export default App;