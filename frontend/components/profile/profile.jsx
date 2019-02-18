import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down'
import FollowButton from '../follow/follow_button'


const Profile = (props) => {
    if (!props.user){
        return null
    }
        let user
        let photo
        let dot
        let dropDown
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

        if (props.user.location && props.user.about_you){
            dot = <li><span className="dot dot2"></span></li>
        }
        if (props.currentUserId === props.user.id){
            dropDown = <ul className="editlinks">
                <DropDown openModal={props.openModal} />
            </ul>
        }

    return(
        <>
           <div className='main-profile'>
           <ul className='left-edit'>
                <li>{dropDown}</li> 
                    <div>
                        <FollowButton currentUserId={props.currentUserId}
                            user={props.user}
                            follows={props.follows}
                            createFollow={props.createFollow}
                            deleteFollow={props.deleteFollow}
                            fetchFollow={props.fetchFollow}
                        />
                </div>
            </ul>
            <div className="profile-user-info">
                <div>
                    <h1 className="profile-user">{user}</h1>
                    <ul className="follow-links">
                            <li className="follow1"><Link to={`/users/${props.user.id}/followers`}>{props.user.follower_userIds.length} followers</Link></li>
                        <li><span className="dot follow2"></span></li>
                            <li className="follow3"><Link to={`/users/${props.user.id}/following`}>{props.user.following_userIds.length} following</Link></li>
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
                        <li className='board-link'><Link to={`/users/${props.user.id}/boards`}>Boards</Link></li>
                        <li className='pin-link'><Link to={`/users/${props.user.id}/pins`}>Pins</Link></li>
                    </ul>
                </div>
                <ul className='menu-links'>
                    <li className='menu menu1'><svg className="gUZ pBj U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="Wide view" role="img"><title>Wide view</title><path d="M13.00,20.00 L13.00,13.00 L20.00,13.00 L20.00,20.00 L13.00,20.00 Z M4.00,11.00 L4.00,4.00 L11.00,4.00 L11.00,11.00 L4.00,11.00 Z M13.00,11.00 L13.00,4.00 L20.00,4.00 L20.00,11.00 L13.00,11.00 Z M4.00,20.00 L4.00,13.00 L11.00,13.00 L11.00,20.00 L4.00,20.00 Z"></path></svg></li>
                    <li className='menu'> &#9776; </li>
                </ul>
            </div>
            
            </div>
        </>
    )
   
}

export default Profile;