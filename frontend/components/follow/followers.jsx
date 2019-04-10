import React from 'react';
import FollowerIndexItem from './follower_index_item';


class Follower extends React.Component {

    componentDidMount() {
        this.props.fetchUsers(this.props.user.follower_userIds);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.user.id != this.props.user.id) {
            this.props.fetchUsers(this.props.user.follower_userIds);
        }
        prevProps.user.id !== this.props.user.follower_userIds;
    }

    render() {
        let photo;
        let userFollowers = this.props.user.follower_userIds.length;

        if (this.props.user.photo) {
            photo = this.props.user.photo;
        }
        else {
            photo = window.empty;
        }
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let i = 0;
        this.props.users.map((user) => {
            if (user.id != this.props.currentUserId && this.props.user.follower_userIds.includes(user.id) ){
                if (i % 4 === 0) {
                    col1.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        currentUser={this.props.user}
                        currentUserId={this.props.currentUserId}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                if (i % 4 === 1) {
                    col2.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        currentUser={this.props.user}
                        currentUserId={this.props.currentUserId}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                if (i % 4 === 2) {
                    col3.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        currentUser = {this.props.user}
                        currentUserId={this.props.currentUserId}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                if (i % 4 === 3) {
                    col4.push(<FollowerIndexItem
                        key={i}
                        user={user}
                        currentUser={this.props.user}
                        currentUserId={this.props.currentUserId}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                    />);
                }
                i++
        }})
        return (
            <>
                <div className='main-profile'>

                    <div className="profile-user-info">
                        <div>
                            <ul className="follow-links-2">
                                <li className='number-followers-2'>{userFollowers}</li>
                                <li className='follow-word'>followers</li>
                            </ul>
                        </div>
                        <ul>
                            <li><img className="profile-picture" src={photo} /></li>
                        </ul>
                    </div>
                </div>
                <div className='bottom-view'>
                
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
                </div>
            </>
        );
    }

}
export default Follower