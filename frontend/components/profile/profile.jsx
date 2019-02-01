import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down'

const Profile = (props) => {
    if (props.currentUserId){
        let user
        let photo
        let dot
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

        if(props.user.location && props.user.about_you){
            dot = <li><span className="dot dot2"></span></li>
        }
    return(
        <>
           <div className='main-profile'>
           <ul className='left-edit'>
                <ul className="editlinks">
                  <DropDown openModal={props.openModal}/>
            </ul>
            </ul>
            <div className="profile-user-info">
                <div>
                    <h1 className="profile-user">{user}</h1>
                    <ul className="follow-links">
                        <li className="follow1"><Link to='user/userId/:followers'>followers</Link></li>
                        <li><span className="dot follow2"></span></li>
                        <li className="follow3"><Link to="user/userId/:following">following</Link></li>
                    </ul>
                    <ul className='about-links'>
                        <li className="about-location">{props.user.location}</li>
                        {dot}
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
                        <li className='board-link'><Link to={`/users/${props.currentUserId}/boards`}>Boards</Link></li>
                        <li className='pin-link'><Link to={`/users/${props.currentUserId}/pins`}>Pins</Link></li>
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