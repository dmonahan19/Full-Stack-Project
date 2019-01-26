import { connect } from "react-redux";
import LoginSignup from './login_signup';
import { clearSessionErrors } from '../../actions/session_actions';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
  });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({ 
    
//   });
// };

export default connect(mapStateToProps, null)(LoginSignup);