import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
//   const sessionLinks = () => {
//     return(
//     <>
//       <Link to='/'>Login</Link> or <Link to='/'>Sign up!</Link> 
//     </>
//     )};

//   const showNavBar = () => {
    if (props.currentUserId){
    return(
    <div>
        <>
        <nav className='nav'>
        <div className= "left-nav">
            <Link to="/"> <img className='nav-logo' src={window.logo} /></Link>
            <div className='nav-searchbar'>
                <input className="searchbar" type="search" placeholder="Search" name="search"/>
            </div>
        </div>
            <ul className="left-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/following">Following</Link></li>
                <li><button onClick={props.logout}>Log Out</button></li>
            </ul>
        </nav>
        </>
    </div>
    )}
    else{
        return null;
    }

//   return props.currentUser ? showNavBar() : sessionLinks()
    }

export default NavBar;