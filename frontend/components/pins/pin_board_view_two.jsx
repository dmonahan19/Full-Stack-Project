import React from 'react';
import { Link } from 'react-router-dom';


class PinBoardViewTwo extends React.Component {

    constructor(props) {
        super(props);
        

    }


    render() {
        return (
            <li>
                <Link to={`/pin/${this.props.pin.id}`}><img className='' src={this.props.pin.photo} /></Link>
            </li>
        );
    }
}

export default PinBoardViewTwo;