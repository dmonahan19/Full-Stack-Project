import React from 'react';
import FollowButton3 from './follow_button_3'


class FollowingIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let user1;
        let photo;
        if (this.props.user.first_name && this.props.user.last_name) {

            user1 = `${this.props.user.first_name} ${this.props.user.last_name}`;
        }
        else if (this.props.user.first_name) {
            user1 = this.props.user.first_name;
        }
        else {
            user1 = this.props.user.email.split("@")[0];
        }

        if (this.props.user.photo) {
            photo = this.props.user.photo;
        }
        else {
            photo = window.empty;
        }

        return (
            <>
                <div className='name-and-following'>
                    <li><img className="following-profile-picture" src={photo} /></li>
                    <li className="following-name">{user1}</li>
                    <ul className="board-and-followers">
                        <li className="follow1">{this.props.user.board_ids.length} boards</li>
                        <li><span className="dot follow2"></span></li>
                        <li className="follow3">{this.props.user.follower_userIds.length} followers</li>
                    </ul>
                    <div>
                        <FollowButton3 
                            currentUser={this.props.currentUser}
                            currentUserId={this.props.currentUserId}
                            user={this.props.user}
                            createFollow={this.props.createFollow}
                            deleteFollow={this.props.deleteFollow}
                        />
                    </div>
                </div>
            </>
        )

    }

};

export default FollowingIndexItem;