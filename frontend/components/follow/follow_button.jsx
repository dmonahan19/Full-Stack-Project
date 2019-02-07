import React from 'react'

class FollowButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {follow: false}
        this.follow = this.follow.bind(this)
        this.unfollow = this.unfollow.bind(this)
    }
    

    follow(){
        this.props.createFollow({
            following_type: 'User',
            following_id: this.props.user.id
        }).then(
        this.setState({follow: true}))
    }

    unfollow(){
        this.props.deleteFollow(this.props.user.follower_ids[this.props.currentUserId]).then(
        this.setState({ follow: false }))
    }

    render() {
        let follow
        if (this.props.currentUserId === this.props.user.id) {
            return null
        }
        this.state.follow ?
           follow = <li><button onClick={this.unfollow} className='unfollow-button'>Unfollow</button></li>
                :
           follow = <li><button onClick={this.follow} className='follow-button'>Follow</button></li>
            
        return follow

    }

}
export default FollowButton