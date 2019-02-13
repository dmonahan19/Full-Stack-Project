import React from 'react'
import FollowingIndexItem from './following_index_item'

class Following extends React.Component {

    componentDidMount() {
        this.props.fetchFollows()
    }

    render() {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let i = 0;
       this.props.follows.map((follow) => {
           if(follow.user_id === this.props.currentUserId){
            if (i % 4 === 0) {
                col1.push(<FollowingIndexItem
                    key={i}
                    follow={follow}
                    user={this.props.user}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            if (i % 4 === 1) {
                col2.push(<FollowingIndexItem
                    key={i}
                    follow={follow}
                    user={this.props.user}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            if (i % 4 === 2) {
                col3.push(<FollowingIndexItem
                    key={i}
                    follow={follow}
                    user={this.props.user}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            if (i % 4 === 3) {
                col4.push(<FollowingIndexItem
                    key={i}
                    follow={follow}
                    user={this.props.user}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            i++
        }})
        return (
            <>
            <div className='splash3'>
                <div className="row2">
                    <div className="column2">
                        {col1}
                    </div>
                    <div className="column2">
                        {col2}
                    </div>
                    <div className="column2">
                        {col3}
                    </div>
                    <div className="column2">
                        {col4}
                    </div>
                </div>
            </div>
        </>
        );
    }

}
export default Following