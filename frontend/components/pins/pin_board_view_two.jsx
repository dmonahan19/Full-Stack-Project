import React from 'react';
import { Link } from 'react-router-dom';


class PinBoardViewTwo extends React.Component {

    constructor(props) {
        super(props);
        

    }


    render() {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let col6 = [];
        this.props.pins.forEach((pin, i) => {
            if (i === 0) {
                col1.push(<img className='' src={pin.photo}></img>);
            }
            if (i === 1) {
                col2.push(<img className='' src={pin.photo}></img>);
            }
            if (i === 2) {
                col3.push(<img className='' src={pin.photo}></img>);
            }
            if (i === 3) {
                col4.push(<img className='' src={pin.photo}></img>);
            }
            if (i === 4) {
                col5.push(<img className='' src={pin.photo}></img>);
            }
            if (i === 4) {
                col6.push(<img className='' src={pin.photo}></img>);
            }
        });
        return(
             <div className="gallery">
                <div className="gallery-item-1">
                    {col1}
                </div>
                <div className="gallery-item-2">
                    {col2}
                </div>
                <div className="gallery-item-3">
                    {col3}
                </div>
                <div className="gallery-item-4">
                    {col4}
                </div>
                <div className="gallery-item-5">
                   {col5}
                </div>
                <div className="gallery-item-6">
                    {col6}
                </div>
            </div> 
        )
    }
}

export default PinBoardViewTwo;