import React from 'react'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'

class LoginSignup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            signup: true,
        }
        this.toggleSignup = this.toggleSignup.bind(this)
    }

    toggleSignup(){
        const signup= this.state.signup;
        this.setState({signup: !signup});
    }

    render(){
        return(
        <> 
        <button className="sessionbutton" onClick={this.toggleSignup}>{this.state.signup ? 'Log in': 'Sign up'}</button>   
        {this.state.signup ? 
        <SignupFormContainer/>: <LoginFormContainer/> }
        </>
        )
    }
   
}

export default LoginSignup
