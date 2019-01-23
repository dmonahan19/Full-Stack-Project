import React from 'react';
import SplashBackground from './splash_background'
import LoginSignup from '../session_form/login_signup'

const Splash = (props) => {
        return(
        <>
        <div className='container'>
            <div >{<LoginSignup/>}</div>
            <div></div>
            <div>{<SplashBackground/>}</div>
        </div>
        </>
        )
    }
    
export default Splash;