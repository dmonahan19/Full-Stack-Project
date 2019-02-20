import React from 'react';
import BoardViewItemThree from './board_view_items_three';

class BoardViewThree extends React.Component {


    componentDidMount() {
        this.props.fetchBoards(this.props.user.id);
        this.props.fetchUserPins(this.props.user.id);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.user.id != this.props.user.id) {
            this.props.fetchBoards(this.props.user.id);
            this.props.fetchUserPins(this.props.user.id);
        }
    }


    render() {
        if (!this.props.user) {
            return null;
        }
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        this.props.boards.forEach((board, i) => {
            if (i % 4 === 0) {
                col1.push(<BoardViewItemThree
                    key={i}
                    board={board}
                    deleteBoard={this.props.deleteBoard}
                    openModal={this.props.openModal}
                    user={this.props.user}
                    currentUserId={this.props.currentUserId}
                    currentUser={this.props.currentUser}
                    fetchPins={this.props.fetchPins}
                    pins={this.props.pins}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            if (i % 4 === 1) {
                col2.push(<BoardViewItemThree
                    key={i}
                    board={board}
                    deleteBoard={this.props.deleteBoard}
                    openModal={this.props.openModal}
                    user={this.props.user}
                    currentUserId={this.props.currentUserId}
                    currentUser={this.props.currentUser}
                    fetchPins={this.props.fetchPins}
                    pins={this.props.pins}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            if (i % 4 === 2) {
                col3.push(<BoardViewItemThree
                    key={i}
                    board={board}
                    deleteBoard={this.props.deleteBoard}
                    openModal={this.props.openModal}
                    user={this.props.user}
                    currentUserId={this.props.currentUserId}
                    currentUser={this.props.currentUser}
                    fetchPins={this.props.fetchPins}
                    pins={this.props.pins}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
            if (i % 4 === 3) {
                col4.push(<BoardViewItemThree
                    key={i}
                    board={board}
                    deleteBoard={this.props.deleteBoard}
                    openModal={this.props.openModal}
                    user={this.props.user}
                    currentUserId={this.props.currentUserId}
                    currentUser={this.props.currentUser}
                    fetchPins={this.props.fetchPins}
                    pins={this.props.pins}
                    createFollow={this.props.createFollow}
                    deleteFollow={this.props.deleteFollow}
                />);
            }
        });


        return (
            <>

                <div className='splash4'>
                    <div className="row3">
                        <div className="column3 hover3">
                            {col1}
                        </div>
                        <div className="column3 hover3">
                            {col2}
                        </div>
                        <div className="column3 hover3">
                            {col3}
                        </div>
                        <div className="column3 hover3">
                            {col4}
                        </div>
                    </div>
                </div>



            </>
        );
    }

}
export default BoardViewThree