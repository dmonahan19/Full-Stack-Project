import { connect } from "react-redux";
import LoginSignup from './login_signup';
import { clearSessionErrors } from '../../actions/session_actions';
import React from 'react';


const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session,
  });
};


export default connect(mapStateToProps, null)(LoginSignup);