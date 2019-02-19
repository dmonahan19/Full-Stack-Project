import React from 'react';

class FollowButton extends React.Component {

    constructor(props) {
        super(props);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }


    follow() {
        this.props.createFollow({
            following_type: 'User',
            following_id: this.props.user.id
        })
    }

    unfollow() {
        let index;
        let deleteUser;
        // if( this.props.follows[parseInt(Object.keys(this.props.follows)[Object.keys(this.props.follows).length - 1])].user_id === this.props.currentUserId){
        //     deleteUser = parseInt(Object.keys(this.props.follows)[Object.keys(this.props.follows).length - 1])
        // }
        // else{
        index = this.props.user.follower_userIds.indexOf(this.props.currentUserId);
        deleteUser = this.props.user.follow_ids[index];
        // }

        this.props.deleteFollow(deleteUser)
    }

    render() {
        let follow;
        if (this.props.currentUserId === this.props.user.id) {
            return null;
        }
        this.props.user.follower_userIds.includes(this.props.currentUserId) ?
            follow = <li><button onClick={this.unfollow} className='unfollow-button'>Unfollow</button></li>
            :
            follow = <li><button onClick={this.follow} className='follow-button'>Follow</button></li>

        return follow

    }

}
export default FollowButton