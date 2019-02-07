import React from 'react'

class FollowButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {following: false}
    }

    doubleFollowClick(){
        () => this.props.createFollow({
            following_type: 'User',
            following_id: this.props.user.id
        })
        this.setState({ following: !following });
    }

    render() {
        let followId = this.props.user.follower_ids[this.props.currentUserId]
        let follow
        if (this.props.currentUserId === this.props.user.id) {
            return null
        }
        this.props.user.following_ids.includes(this.props.currentUserId) ?
           follow = <li><button onClick={() => this.props.deleteFollow(followId)} className='unfollow-button'>Unfollow</button></li>
                :
           follow = <li><button onClick={() => this.props.createFollow({
                following_type: 'User',
                following_id: this.props.user.id
            })} className='follow-button'>Follow</button></li>
            
        return follow

    }

}
export default FollowButton