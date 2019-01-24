import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    if (props.currentUserId){
        const user = props.user.email.split("@")[0]
    return(
        <>
           <div className='main-profile'>
           <ul className='left-edit'>
                <ul className="editlinks">
                  <li><button className="plus">+</button></li> 
                  <li><Link to="/settings"><img className="edit-img" src={window.pencil} /></Link></li>
                </ul>
            </ul>
                <ul>
                    <li><h1>{user}</h1></li>
                </ul>
            </div>
        </>
    )}
    else{
        return null;
    }
}

export default Profile;
