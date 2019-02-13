import React from 'react';
import FollowButton2 from './follow_button_2'


class FollowingIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let user
        let photo
        if (this.props.user.first_name && this.props.user.last_name) {

            user = `${this.props.user.first_name} ${this.props.user.last_name}`
        }
        else if (this.props.user.first_name) {
            user = this.props.user.first_name
        }
        else {
            user = this.props.user.email.split("@")[0]
        }

        if (this.props.user.photo) {
            photo = this.props.user.photo
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
                        {/* <FollowButton2 currentUserId={this.props.currentUserId}
                            user={this.props.user}
                            follow={this.props.follow}
                            createFollow={this.props.createFollow}
                            deleteFollow={this.props.deleteFollow}
                        /> */}
                    </div>
                </div>
            </>
        )

    }

};

export default FollowingIndexItem;