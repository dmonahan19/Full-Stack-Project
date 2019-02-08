import React from 'react'
import FollowIndexItem from './follow_index_item'

class Followers extends React.Component {

    // componentDidMount(){
    //     this.props.fetchUsersFollows(currentUserId)
    // }

    render() {
        const follows = this.props.user.follower_ids.map((follow, i) => {
            return (
                <FollowIndexItem
                    key={i}
                    follow={follow}
                    user={this.props.user}
                    users={this.props.users}
                    currentUserId={this.props.currentUserId}
                />
            );
        });

        return (
            <div >
                <h2 className='name'>Name</h2>
                <ul className=''>
                    {follows}
                </ul>
            </div>
        );
    }

}
export default Followers