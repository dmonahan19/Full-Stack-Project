import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    if (props.currentUserId){
        const user = props.user.email.split("@")[0]
    return(
        <>
            <button><i class="far fa-plus"></i></button>
            <Link to="/settings"><i class="fas fa-pen"></i></Link>
            <h1>{user}</h1>
            <Link to={`/${props.currentUserId}/followers`}>followers</Link>
            <Link to={`/${props.currentUserId}/followering`}>following</Link>
        </> 
        
        
    )
    
    }
    else{
        return null;
    }
}

export default Profile;
