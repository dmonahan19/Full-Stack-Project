import React from 'react'
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component{


    componentDidMount(){
        this.props.fetchBoards(this.props.user.id);
    
    }

  
    componentDidUpdate(prevProps) {
        if (prevProps.user.id != this.props.user.id) {
          this.props.fetchBoards(this.props.user.id);
        }
      }

    
    render(){
      let boardOrder;
      let board1;
      let board2;
      if(!this.props.user){
        return null;
      }
      if (this.props.showOrder === "4") {
        board2 = this.props.boards.sort((a, b) => a.lastEdited.localeCompare(b.lastEdited));
        boardOrder = board2.reverse();
      }
      else if (this.props.showOrder === "1") {
        boardOrder = this.props.boards.sort((a, b) => a.title.localeCompare(b.title));
      }
      else if (this.props.showOrder === "2") {
        board1 = this.props.boards.sort((a, b) => a.created_at.localeCompare(b.created_at));
        boardOrder = board1.reverse();
      }
      else if (this.props.showOrder === "3") {
        boardOrder = this.props.boards.sort((a, b) => a.created_at.localeCompare(b.created_at));
      }
      const boards = boardOrder.map((board,i) => {
        return (
            <BoardIndexItem
              key={i}
              board={board}
              deleteBoard={this.props.deleteBoard}
              openModal={this.props.openModal}
              user={this.props.user}
              currentUserId={this.props.currentUserId}
            />
        );
      });
  
      return (
        <div >        
            <h2 className='name'>Name</h2>
          <ul>
            { boards }
          </ul>
        </div>
      );
    }
  
}
export default BoardIndex