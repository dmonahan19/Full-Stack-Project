import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Pixtrest</h1>, root);
});

import {signup,login,logout} from '../frontend/util/session_api_util'
window.signup = signup;
window.login = login;
window.logout = logout;