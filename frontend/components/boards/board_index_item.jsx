import React from 'react';
import { Link } from 'react-router-dom';




const BoardIndexItem = ({ board, deleteBoard, openModal }) => {
    let photo
    if (board.photo) {
       photo = <li><Link to={`/boards/${board.id}`}>
            <img src={board.photo} />

        </Link></li> 
    } 
    
    else {
        photo= <li className='no-photo'><Link to={`/boards/${board.id}`}>
            <div className='no-photo'></div>

            </Link></li>
    }




    return (
    <li>
     <div className='board-index'>
        <ul className="left-board-index">
            <div className="picture-name">
                {photo}
            </div>
                <ul className= "right-board-index">
                   
                   <li> <Link to={`/boards/${board.id}`}>
                        <p> {board.numPins} Pins </p>
                    </Link></li>          
                    
                    <li><Link to={`/boards/${board.id}/edit`}>
                        <p>7 days ago</p>
                    </Link></li> 

                    <li className='dontshow'><button onClick={() => openModal('editboardform', board.id )} >
                        <img className="edit-img" src={window.pencil} />
                    </button></li> 
                </ul>
            </ul>
        </div>
  
      </li>);
  };
  
  export default BoardIndexItem;