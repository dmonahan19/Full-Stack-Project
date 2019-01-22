import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Pixtrest</h1>, root);
});


// testing only
// import {signup,login,logout} from '../frontend/util/session_api_util'
// window.signup = signup;
// window.login = login;
// window.logout = logout;