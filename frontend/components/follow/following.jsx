import React from 'react'
import FollowingIndexItem from './following_index_item'

class Following extends React.Component {

    componentDidMount() {
        this.props.fetchFollows()
    }

    render() {
        const follows = this.props.follows.map((follow, i) => {
            return (
                <FollowingIndexItem
                    key={i}
                    follow={follow}
                    // user={this.props.user}
                    // currentUserId={this.props.currentUserId}
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
export default Following