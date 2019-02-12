import React from 'react';


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
                <li><img className="following-profile-picture" src={photo} /></li>
                <li>{user}</li>
            </>
        )

    }

};

export default FollowingIndexItem;