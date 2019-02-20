import React from 'react';

class FollowButton4 extends React.Component {

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
        let followId = this.props.follows.filter(follow => follow.following_id === this.props.boardId)[0].id;
        this.props.deleteFollow(followId);
    }

    render() {
        debugger
        let follow;
            this.props.user.following_boardIds.includes(this.props.boardId)  ?
            follow = <li><button onClick={this.unfollow} className='unfollow-button4'>Unfollow</button></li>
            :
            follow = <li><button onClick={this.follow} className='follow-button4'>Follow</button></li>

        return follow

    }

}
export default FollowButton4