import React from 'react'
import { withRouter } from 'react-router-dom';

class PinShow extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }

    render() {
 
        return (
            <div className='pin-background'>
                <div className='pin-show'>
                    <img className="edit-show-img" src={window.pencil} />
                    <div>
                        <div className='pin-show-photo'>
                            <img className='pin-photo-img' src={ this.props.pin.photo }></img>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    
    
    
    }
    
    
     
    
    
    
export default withRouter(PinShow);