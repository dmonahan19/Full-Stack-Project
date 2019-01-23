import React from 'react'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Splash from './splash/splash_container'
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
        <Route path="/" component={Splash} /> 
    </div>
  );
  
  export default App;