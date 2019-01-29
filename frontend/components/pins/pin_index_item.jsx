import React from 'react';


const PinIndexItem = () => {
    return (
      <li className='pin-item'>
        <div className='margin-holder'>
          <img src={props.pin.photo}/>
          <div>{props.pin.title}</div>
        </div>
      </li>);
  };
  
  export default PinIndexItem;
  