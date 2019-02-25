import React from 'react';
import BoardViewItem from './board_view_items';

class BoardViewTwo extends React.Component {


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
        let boards;
        let board1;
        let board2;
        if (!this.props.user) {
            return null;
        }
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        if(this.props.pins.length > 0){
            if (this.props.showOrder === "4") {
                board2 = this.props.boards.sort((a, b) => a.lastEdited.localeCompare(b.lastEdited));
                boards = board2.reverse();
            }
            else if (this.props.showOrder === "1"){
                boards = this.props.boards.sort((a, b) => a.title.localeCompare(b.title));
            }
            else if(this.props.showOrder === "2"){
                board1 = this.props.boards.sort((a, b) => a.created_at.localeCompare(b.created_at));
                boards = board1.reverse();
            }
            else if(this.props.showOrder === "3"){
                boards = this.props.boards.sort((a, b) => a.created_at.localeCompare(b.created_at));
            }
        }
        else{
            boards = this.props.boards;
        }
        boards.forEach((board, i) => {
            if (i % 4 === 0) {
                col1.push(<BoardViewItem
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
                col2.push(<BoardViewItem
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
                col3.push(<BoardViewItem
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
                col4.push(<BoardViewItem
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
export default BoardViewTwo