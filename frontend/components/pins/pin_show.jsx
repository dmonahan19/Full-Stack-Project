import React from 'react'
import { withRouter } from 'react-router-dom';
import CreatePin from './create_pin'

class PinShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.pin;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId).then(() => {
            this.setState(this.props.pin)
        })
        this.props.fetchBoards();
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }
    



    handleSubmit(e) {
        e.preventDefault();
        const pin = Object.assign({}, this.state);
        this.props.createPin(pin);
    }

 
  

    render() {
        const boards = this.props.boards.map((board, i) => {
            return (
                <option value={board.id} key={i}> {board.title} </option>
            );
        });
       
        return (
            <div className='pin-background'>
                <div className='pin-show' >
                    <li className='dontshow'><button onClick={() => this.props.openModal('pineditform', this.props.match.params.pinId )} >
                        <img className="edit-img" src={window.pencil} />
                    </button></li> 
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        <select className='pin-show-selector' value={this.state.board_id} onChange={this.update('board_id')}>
                            <option value='0' disabled={true}>Choose a board (required)</option>
                            {boards}
                        </select>
    
                    </label>
                    <input className='pin-show-submit'  type='submit' value='Save'></input>
                    </form>
                    <div class-name='photo-fit'>
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