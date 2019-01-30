import React from 'react';


const PinIndexItem = (props) => {
    return (
      <li className='pin-item'>
        <div>
          <img src={props.pin.photo}/>
          <div>{props.pin.title}</div>
        </div>
      </li>);
  };
  
  export default PinIndexItem;
  
