import React from 'react';

class FollowButton3 extends React.Component {

    constructor(props) {
        super(props);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    follow() {
        this.props.createFollow({
            following_type: 'User',
            following_id: this.props.user.id
        });
    }

    unfollow() {
        let index;
        index = this.props.currentUser.follower_userIds.indexOf(this.props.user.id);
        this.props.deleteFollow(this.props.currentUser.follow_ids[index]);
    }

    render() {
    
            let follow;
    
            this.props.user.follower_userIds.includes(this.props.currentUserId) ?
                follow = <li><button onClick={this.unfollow} className='unfollow-button-2'>Unfollow</button></li>
                :
                follow = <li><button onClick={this.follow} className='follow-button-2'>Follow</button></li>

            return follow

     }
 


}
export default FollowButton3