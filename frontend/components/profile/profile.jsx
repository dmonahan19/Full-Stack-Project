import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    if (props.currentUserId){
        let user
        let photo
        if(props.user.first_name && props.user.last_name){
            user = `${props.user.first_name} ${props.user.last_name}`
        }
        else if(props.user.first_name){
            user = props.user.first_name
        }
        else{
            user = props.user.email.split("@")[0]
        }

        if(props.user.photo){
            photo = props.user.photo
        }
        else{
            photo= window.empty
        }
    return(
        <>
           <div className='main-profile'>
           <ul className='left-edit'>
                <ul className="editlinks">
                  <li><button className="plus">+</button></li> 
                  <li><Link to="/settings"><img className="edit-img" src={window.pencil} /></Link></li>

                </ul>
            </ul>
            <div className="profile-user-info">
                <div>
                    <h1 className="profile-user">{user}</h1>
                    <ul className="follow-links">
                        <li className="follow1"><Link to='/userId/:followers'>followers</Link></li>
                        <li><span className="dot follow2"></span></li>
                        <li className="follow3"><Link to="/userId/:following">following</Link></li>
                    </ul>
                    <ul className='about-links'>
                        <li className="about-location">{props.user.location}</li>
                        <li><span className="dot dot2"></span></li>
                        <li>{props.user.about_you || ""}</li>
                    </ul>
                </div>
                <ul>
                    <li><img className="profile-picture" src={photo}/></li>
                </ul>
            </div>
            <div className= "profile-user-info2">
                <div>
                    <ul className="boardpin-links">
                        <li className='board-link'><Link to="/userId/boards">Boards</Link></li>
                        <li className='pin-link'><Link to="/users/:userId/pins">Pins</Link></li>
                    </ul>
                </div>
                <ul>
                    <li className='menu'> &#9776; </li>
                </ul>
            </div>
            
            </div>
        </>
    )}
    else{
        return null;
    }
}

export default Profile;
