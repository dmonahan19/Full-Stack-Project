import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    let photo
    let user
    if (props.currentUserId){   
        if(props.user.photo){
                photo = <img className="nav-profile-picture" src={props.user.photo}/>
            }
        else if(props.user.first_name){
            photo = <div className="nav-photo">{props.user.first_name[0]}</div>
        }
        else{
                photo = <div className="nav-photo">{props.user.email[0]}</div>
        }
       if(props.user.first_name){
            user = props.user.first_name
        }
        else{
            user = props.user.email.split("@")[0]  
        }
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

                        <div className="nav-photo-name">
                            <li><Link to="/users/:userId">{photo}</Link></li>
                            <li><Link to="/users/:userId">{user}</Link></li>
                        </div>
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