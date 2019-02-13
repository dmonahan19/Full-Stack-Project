import React from 'react'

class FollowButton2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = { follow: false }
        this.follow = this.follow.bind(this)
        this.unfollow = this.unfollow.bind(this)
    }


    follow() {
        this.props.createFollow({
            following_type: 'User',
            following_id: this.props.user.id
        }).then(
            this.setState({ follow: true }))
    }

    unfollow() {
        this.props.deleteFollow(this.props.follow.id).then(
            this.setState({ follow: false }))
    }

    render() {
        let follow
        if (this.props.currentUserId === this.props.user.id) {
            return null
        }
        this.props.follow.follow_ids.includes(this.props.follow.id) ?
            follow = <li><button onClick={this.unfollow}>Unfollow</button></li>
            :
            follow = <li><button onClick={this.follow}>Follow</button></li>

        return follow

    }

}
export default FollowButton2