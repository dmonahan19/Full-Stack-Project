import { connect } from "react-redux";
import LoginSignup from './login_signup';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
  });
};

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     processForm: (user) => dispatch(login(user)),
//     login: (user)=> dispatch(login(user))
    
//   });
// };

export default connect(mapStateToProps, null)(LoginSignup);