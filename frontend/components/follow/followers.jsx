import React from 'react';
import FollowerIndexItem from './follower_index_item';


class Follower extends React.Component {

    componentDidMount() {
        // this.props.fetchFollows();
        this.props.fetchUsers(this.props.user.follower_ids);
    }

    render() {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let i = 0;
        this.props.users.map((user) => {
            if(user.id != this.props.currentUserId ){
                if (i % 4 === 0) {
                    col1.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                if (i % 4 === 1) {
                    col2.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                if (i % 4 === 2) {
                    col3.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                if (i % 4 === 3) {
                    col4.push(<FollowerIndexItem
                        key={i}
                        user={user}
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
export default Follower