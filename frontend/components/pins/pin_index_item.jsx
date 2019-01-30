import React from 'react';
import { Link } from 'react-router-dom';


const PinIndexItem = (props) => {
    return (
    
     
          <div className= 'whole-image-save'>
            <button className='button4' onClick={() => props.openModal('createpinform')} >
              <div className='whole-pin-button'>
                <icon className='fas fa-thumbtack pin-index-icon'></icon>
              <h1 className="pin-index-submit">Save</h1>
              </div>
            </button>
            <Link to={`/pin/${props.pin.id}`}><img className='image4' src={props.pin.photo} /></Link>
            <div className='pin-show-page-title'>{props.pin.title}</div>
          </div>

 
     );
  };
  
  export default PinIndexItem;
  
