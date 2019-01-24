import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
  return ({
    signup: ownProps.signup,
    toggleSignup: ownProps.toggleSignup,
    errors: state.errors.session,
    formType: 'Log in',
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user)),
    login: (user)=> dispatch(login(user))
    
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);