import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './drop_down';
import FollowButton from '../follow/follow_button';


class Profile extends React.Component {
    
    componentDidUpdate(prevProps){
        prevProps.user.id != this.props.user.id;
        
    }

   render(){
       let boardFollowers = this.props.user.following_boardIds.length;
       let userFollowers = this.props.user.following_userIds.length;
    if (!this.props.user){
        return null;
    }
        let user;
        let photo;
        let dot;
        let dropDown;
        if(this.props.user.first_name && this.props.user.last_name){
    
            user = `${this.props.user.first_name} ${this.props.user.last_name}`;
        }
        else if(this.props.user.first_name){
            user = this.props.user.first_name;
        }
        else{
            user = this.props.user.email.split("@")[0];
        }

        if(this.props.user.photo){
            photo = this.props.user.photo;
        }
        else{
            photo= window.empty;
        }

        if (this.props.user.location && this.props.user.about_you){
            dot = <li><span className="dot dot2"></span></li>
        }
        if (this.props.currentUserId === this.props.user.id){
            dropDown = <ul className="editlinks">
                <DropDown openModal={this.props.openModal} />
            </ul>
        }

    return(
        <>
           <div className='main-profile'>
           <ul className='left-edit'>
                <li>{dropDown}</li> 
                    <div>
                        <FollowButton currentUserId={this.props.currentUserId}
                            user={this.props.user}
                            follows={this.props.follows}
                            createFollow={this.props.createFollow}
                            deleteFollow={this.props.deleteFollow}
                            fetchFollow={this.props.fetchFollow}
                        />
                </div>
            </ul>
            <div className="profile-user-info">
                <div>
                    <h1 className="profile-user">{user}</h1>
                    <ul className="follow-links">
                            <li className="follow1"><Link to={`/users/${this.props.user.id}/followers`}>{this.props.user.follower_userIds.length} followers</Link></li>
                        <li><span className="dot follow2"></span></li>
                            <li className="follow3"><Link to={`/users/${this.props.user.id}/following`}>{ boardFollowers + userFollowers} following</Link></li>
                    </ul>
                    <ul className='about-links'>
                        <li className="about-location">{this.props.user.location}</li>
                        {dot}
                        <li>{this.props.user.about_you || ""}</li>
                    </ul>
                </div>
                <ul>
                    <li><img className="profile-picture" src={photo}/></li>
                </ul>
            </div>
            
            </div>
        </>
    )
    }  
}

export default Profile;