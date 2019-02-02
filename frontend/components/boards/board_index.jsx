import React from 'react'
import BoardIndexItem from './board_index_item'

class BoardIndex extends React.Component{

    componentDidMount(){
        this.props.fetchBoards(this.props.user.id)
    
    }

  
    componentDidUpdate(prevProps) {
        if (prevProps.user.id != this.props.user.id) {
          this.props.fetchBoards(this.props.user.id);
        }
      }

    
    render(){
      const boards = this.props.boards.map((board,i) => {
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
          <ul className=''>
            { boards }
          </ul>
        </div>
      );
    }
  
}
export default BoardIndex