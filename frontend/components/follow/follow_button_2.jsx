import React from 'react'

class FollowButton2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { follow: false };
        this.unfollow = this.unfollow.bind(this);
    }


    unfollow() {
        debugger
        this.props.deleteFollow(this.props.follow.id).then(
            this.setState({ follow: false }));
    }

    render() {
       return(
      <li className='unfollow-button-2'><button onClick={this.unfollow}>Unfollow</button></li>
       )


    }

}
export default FollowButton2