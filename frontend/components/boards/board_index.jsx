import React from 'react'
import BoardIndexItem from './board_index_item'

class BoardIndex extends React.Component{

    componentDidMount(){
        this.props.fetchBoards()
    
    }

  
    
    render(){
      const boards = this.props.boards.map((board,i) => {
        return (
            <BoardIndexItem
              key={i}
              board={board}
              deleteBoard={this.props.deleteBoard}
              openModal={this.props.openModal}
            />
        );
      });
  
      return (
        <div >
          <ul className=''>
            { boards }
          </ul>
        </div>
      );
    }
  
}
export default BoardIndex