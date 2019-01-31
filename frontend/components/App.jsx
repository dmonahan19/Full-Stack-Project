import React from 'react'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Splash from './splash/splash_container'
import ProfileContainer from './profile/profile_container'
import FullProfileForm from './profile/full_profile_form'
import { ProtectedRoute } from '../util/route_util';
import BoardsContainer from './boards/boards_container'
import EditBoardFormContainer from './boards/board_edit_form_container'
import BoardShowContainer from './boards/board_show_container'
import PinShowContainer from './pins/pin_show_container'
import PinBuilderContainer from './pins/pin_builder_container'
import ProfileAllPins from './pins/profile_all_pins'
import CreatePinFromContainer from './pins/create_pin_form_container'
import HomePageContainer from './homepage/home_page_container'
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
              <ProtectedRoute exact path="/home" component={HomePageContainer} />
            <ProtectedRoute exact path="/users/:userId" component={BoardsContainer}/>
            <ProtectedRoute exact path="/settings" component={FullProfileForm}/>
            <ProtectedRoute exact path="/users/:userId/boards" component={BoardsContainer}/>
            <ProtectedRoute path='/users/:userId/boards/:boardId/edit' component={EditBoardFormContainer} />
            <ProtectedRoute path='/boards/:boardId' component={BoardShowContainer} />
            <ProtectedRoute path='/pin-builder' component={PinBuilderContainer} />
            <ProtectedRoute path='/pin/:pinId' component={PinShowContainer} />
            <ProtectedRoute path='/users/:userId/pins' component={ProfileAllPins} />
        </Switch>
    </div>
  );
  
  export default App;
