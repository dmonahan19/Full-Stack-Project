import React from 'react';

const ChangePicture = (props) => {
    return(
    <>
    <div className="all-boxes">
        <div className='all-boxes-2"'>
            <div>
                <h2 className="pop-change">Change your picture</h2>
                <div className='bottom-border'></div>
                <button className='x-button' onClick={props.showPicture}> &#215; </button>
            </div>
            <label className="choose-photo-button">
            Choose photo
                <input className="choose-photo-button" onChange={props.handleFile} type="file" />
           </label>
        </div>
    </div>   
    </>
        )}

export default ChangePicture;
