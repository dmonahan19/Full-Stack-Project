import React from 'react';

class FollowButton3 extends React.Component {

    constructor(props) {
        super(props);
        this.unfollow = this.unfollow.bind(this);
    }

    unfollow() {
        this.props.deleteFollow(this.props.currentUser.following_ids[this.props.user.id]);
    }

    render() {
    return(
        <li className='unfollow-button-2'><button onClick={this.unfollow}>Unfollow</button></li>
    )
    

    }

}
export default FollowButton3