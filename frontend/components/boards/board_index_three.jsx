import React from 'react'
import BoardIndexItemTwo from './board_index_item_two'


class BoardIndexThree extends React.Component {

    componentDidMount() {
        this.props.fetchBoards(this.props.currentUserId);

    }

    render() {
        const boards = this.props.boards.map((board, i) => {
            return (
                <BoardIndexItemTwo
                    key={i}
                    board={board}
                    pin={this.props.pin}
                    createPin={this.props.createPin}
                />
            );
        });

        return (
            <div >
                <ul>
                    {boards}
                </ul>
            </div>
        );
    }

}
export default BoardIndexThree
