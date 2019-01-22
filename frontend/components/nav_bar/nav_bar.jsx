import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const sessionLinks = () => {
    return(
    <>
      <Link to='/login'>Login</Link> or <Link to='/signup'>Sign up!</Link> 
    </>
    )};

  const showNavBar = () => {
    return(
    <div>
        <Link to="/">P</Link>
        <Link to="/">Home</Link>
        <Link to="/following">Following</Link>
        <button onClick={props.logout}>Log Out</button>
    </div>
    )}

  return props.currentUser ? showNavBar() : sessionLinks()
}

export default NavBar;