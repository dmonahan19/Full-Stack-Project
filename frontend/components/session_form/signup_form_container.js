import { connect } from "react-redux";
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
  return ({
    signup: ownProps.signup,
    toggleSignup: ownProps.toggleSignup,
    errors: state.errors.session,
    formType: 'Sign up',
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    login: (user)=> dispatch(login(user))
    
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);