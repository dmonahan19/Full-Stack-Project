import React from 'react'
import FollowingBoardIndex from './following_board_index';

class FollowingBoard extends React.Component {

    componentDidMount() {
        this.props.fetchFollows();
        this.props.fetchBoardPins(this.props.user.following_boardIds);
    }

    render() {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let i = 0;
        this.props.follows.map((follow) => {
            if (follow.user_id === this.props.currentUserId && follow.following_type === "Board") {
                if (i % 4 === 0) {
                    col1.push(<FollowingBoardIndex
                        key={i}
                        follow={follow}
                        user={this.props.user}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                        pins={this.props.pins}
                        boardId={follow.following_id}
                        fetchBoard={this.props.fetchBoard}
                        fetchPins={this.props.fetchPins}
                        boards={this.props.boards}
                        follows={this.props.follows}
                    />);
                }
                if (i % 4 === 1) {
                    col2.push(<FollowingBoardIndex
                        key={i}
                        follow={follow}
                        user={this.props.user}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                        pins={this.props.pins}
                        boardId={follow.following_id}
                        fetchBoard={this.props.fetchBoard}
                        boards={this.props.boards}
                        fetchPins={this.props.fetchPins}
                        follows={this.props.follows}
                    />);
                }
                if (i % 4 === 2) {
                    col3.push(<FollowingBoardIndex
                        key={i}
                        follow={follow}
                        user={this.props.user}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                        pins={this.props.pins}
                        boardId={follow.following_id}
                        fetchBoard={this.props.fetchBoard}
                        boards={this.props.boards}
                        fetchPins={this.props.fetchPins}
                        follows={this.props.follows}
                    />);
                }
                if (i % 4 === 3) {
                    col4.push(<FollowingBoardIndex
                        key={i}
                        follow={follow}
                        user={this.props.user}
                        currentUserId={this.props.currentUserId}
                        createFollow={this.props.createFollow}
                        deleteFollow={this.props.deleteFollow}
                        pins={this.props.pins}
                        boardId={follow.following_id}
                        fetchBoard={this.props.fetchBoard}
                        boards={this.props.boards}
                        fetchPins={this.props.fetchPins}
                        follows={this.props.follows}
                    />);
                }
                i++
            }
        })
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
export default FollowingBoard