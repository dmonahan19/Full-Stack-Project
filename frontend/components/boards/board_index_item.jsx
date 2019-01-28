import React from 'react';
import { Link } from 'react-router-dom';



const BoardIndexItem = ({ board, deleteBoard, openModal }) => {

    return (
    <li>
     <h2 className='name'>Name</h2>
     <div className='board-index'>
        <ul className="left-board-index">
            <div className="picture-name">
                <li><Link to={`/boards/${board.id}`}>
                <img src={window.img3}/>
                </Link></li>

                <li><Link to={`/boards/${board.id}`}>
                    <p className='board-title'>{board.title}</p>
                </Link></li>
            </div>
                <ul className= "right-board-index">
                   
                   <li> <Link to={`/boards/${board.id}`}>
                        <p> 0 pins </p>
                    </Link></li>          
                    
                    <li><Link to={`/boards/${board.id}/edit`}>
                        <p>7 days ago</p>
                    </Link></li> 

                    <li><button onClick={() => openModal('editboardform')} >
                        <img className="edit-img" src={window.pencil} />
                    </button></li> 
                </ul>
            </ul>
        </div>
  
      </li>);
  };
  
  export default BoardIndexItem;