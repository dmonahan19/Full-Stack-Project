import React from 'react';

class FollowButton5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        };
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }


    follow() {
        this.props.createFollow({
            following_type: 'Board',
            following_id: this.props.board.id
        });
    }

    unfollow() {
        let index;
        index = this.props.currentUser.following_boardIds.indexOf(this.props.board.id);
        this.props.deleteFollow(this.props.currentUser.follow_ids_board[index]);
    }

    render() {
        let follow;
        this.props.currentUser.following_boardIds.includes(this.props.board.id) ?
            follow = <li><button onClick={this.unfollow} className='unfollow-button5'>Unfollow</button></li>
            :
            follow = <li><button onClick={this.follow} className='follow-button5'>Follow</button></li>

        return follow

    }

}
export default FollowButton5