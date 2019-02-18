import React from 'react';

class FollowButton3 extends React.Component {

    constructor(props) {
        super(props);
        this.unfollow = this.unfollow.bind(this);
    }

    unfollow() {
        let index;
        index= this.props.currentUser.follower_userIds.indexOf(this.props.user.id);
        this.props.deleteFollow(this.props.currentUser.follow_ids[index]);
    }

    render() {
    return(
        <li className='unfollow-button-2'><button onClick={this.unfollow}>Unfollow</button></li>
    )
    

    }

}
export default FollowButton3