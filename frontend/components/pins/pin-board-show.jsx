import React from 'react';
import PinIndexItem from './pin_index_item'
import {withRouter} from 'react-router-dom'

const PinBoardShow = (props) => {
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let i = 0 ;
    props.pins.forEach((pin) => {
        if (pin.board_id == props.match.params.boardId){
            if (i % 4 === 0) {
                col1.push(<PinIndexItem key={i}
                    pin={pin}
                    openModal={props.openModal}
                   />);
            }
            if (i % 4 === 1) {
                col2.push(<PinIndexItem key={i}
                    pin={pin}
                    openModal={props.openModal}
                    />);
            }
            if (i % 4 === 2) {
                col3.push(<PinIndexItem key={i}
                    pin={pin}
                    openModal={props.openModal}
                    />);
            }
            if (i % 4 === 3) {
                col4.push(<PinIndexItem key={i}
                    pin={pin}
                    openModal={props.openModal}
                    />);
            }
            i++;
        }
    });

    
    return (
        <>
        
            <div className='splash2'>
                <div className="row2">
                    <div className="column2">
                        {col1}
                    </div>
                    <div className="column2">
                        {col2}
                    </div>
                    <div className="column2">
                        {col3}
                    </div>
                    <div className="column2">
                        {col4}
                    </div>     
                </div>
            </div>
      
      
        
        </>
    )
}

export default withRouter(PinBoardShow);