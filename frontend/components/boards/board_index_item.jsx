import React from 'react';
import { Link } from 'react-router-dom';




class BoardIndexItem extends React.Component { 

    constructor(props) {
        super(props)
        this.state = { showSave: false }

        this.onHover = this.onHover.bind(this)
        this.offHover = this.offHover.bind(this)

    }

    onHover(e) {
        this.setState({ showSave: true })
    }

    offHover(e) {
        this.setState({ showSave: false })
    }
   


render(){
    let photo
    let editButton
    if (this.props.board.photo) {
        photo = <li><Link to={`/boards/${this.props.board.id}`}>
            <img src={this.props.board.photo} />

        </Link></li>
    }

    else {
        photo = <li className='no-photo'><Link to={`/boards/${this.props.board.id}`}>
            <div className='no-photo'></div>

        </Link></li>
    }
    if (this.props.currentUserId === this.props.user.id){
       editButton = < div >
            {
                this.state.showSave ? (
                    <li className='dontshow'><button onClick={() => this.props.openModal('editboardform', this.props.board.id)} >
                        <img className="edit-img" src={window.pencil} />
                    </button></li>) : (null)
            }    
    </div > } 
    else {
        editButton = null
    }

    return (
    <li>
        <div className='board-index' onMouseEnter={this.onHover}
                onMouseLeave={this.offHover}>

        <ul className="left-board-index">
            <div className="picture-name">
                {photo}
             <li><Link to={`/boards/${this.props.board.id}`}>
                <h2 className='board-title'>{this.props.board.title} </h2>
            </Link></li> 
            </div>
                <ul className= "right-board-index">
                   
                   <li> <Link to={`/boards/${this.props.board.id}`}>
                        <p> {this.props.board.numPins} Pins </p>
                    </Link></li>          
                    
                    <li><Link to={`/boards/${this.props.board.id}`}>
                        <p>7 days ago</p>
                    </Link></li> 
                    <div>
                       {editButton} 
                    </div>        
                </ul>
            </ul>
        </div>
  
      </li>);
  }
};
  
  export default BoardIndexItem;