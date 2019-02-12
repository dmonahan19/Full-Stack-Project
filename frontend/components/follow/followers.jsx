import React from 'react'
import FollowIndexItem from './follow_index_item'

class Followers extends React.Component {

    componentDidMount(){
        this.props.fetchFollows(this.props.user.follow_ids)
    }

    render() {
        const follows = this.props.follows.map((follow, i) => {
            return (
                <FollowIndexItem
                    key={i}
                    follow={follow}
                    user={this.props.user}
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