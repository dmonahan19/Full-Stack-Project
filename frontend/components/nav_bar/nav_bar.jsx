import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

    if (props.currentUserId){
        const user = props.user.email.split("@")[0]
    return(
    <div>
        <>
        <nav className='nav'>
                <ul className="left-nav">
                    <li> <Link to="/"> <img className='nav-logo' src={window.logo} /></Link></li>
                    <li><i className="fa fa-search fa-lg nav-icon"></i></li>
                    <li className="searchbar"><input type="search" placeholder="Search" name="search"/></li>
                    <ul className="navlinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/following">Following</Link></li>
                        <li><Link to="/users/:userId">{user}</Link></li>
                        <li ><button className='buttonnav' onClick={props.logout}>Log Out</button></li>
                    </ul>
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