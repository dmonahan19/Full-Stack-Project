import React from 'react';
import FollowButton2 from './follow_button_2'


class FollowingIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let user
        let photo
        if (this.props.follow.first_name && this.props.follow.last_name) {

            user = `${this.props.follow.first_name} ${this.props.follow.last_name}`
        }
        else if (this.props.follow.first_name) {
            user = this.props.follow.first_name
        }
        else {
            user = this.props.follow.email.split("@")[0]
        }

        if (this.props.follow.photo) {
            photo = this.props.follow.photo
        }
        else {
            photo = window.empty
        }

        return (
            <>
                <div className='name-and-following'>
                    <li><img className="following-profile-picture" src={photo} /></li>
                    <li className="following-name">{user}</li>
                    <ul className="board-and-followers">
                        <li className="follow1">13 boards</li>
                        <li><span className="dot follow2"></span></li>
                        <li className="follow3">48 followers</li>
                    </ul>
                    <div>
                        <FollowButton2 currentUserId={this.props.currentUserId}
                            user={this.props.user}
                            follow={this.props.follow}
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