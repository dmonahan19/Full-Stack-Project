import React from 'react';
import { Link } from 'react-router-dom';
import PinBoardViewTwo from '../pins/pin_board_view_two';



class BoardViewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showSave: false };

        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);

    }

    componentDidMount() {
        this.props.fetchPins(this.props.board.id);

    }

    onHover(e) {
        this.setState({ showSave: true });
    }

    offHover(e) {
        this.setState({ showSave: false });
    }



    render() {
        let editButton;
      
        if (this.props.currentUserId === this.props.user.id) {
            editButton = <div>
                {
                    this.state.showSave ? (
                        <li className='dontshow'><button onClick={() => this.props.openModal('editboardform', this.props.board.id)} >
                            <img className="edit-img" src={window.pencil} />
                        </button></li>) : (null)
                }
            </div >
        }
        else {
            editButton = null
        }

        return (
            <li>
                <div className='' onMouseEnter={this.onHover}
                    onMouseLeave={this.offHover}>
                    <div className='board-view'>
                        <li><PinBoardViewTwo pins={this.props.pins} /></li> 
                        <li><Link to={`/boards/${this.props.board.id}`}>
                                <h2 className=''>{this.props.board.title} </h2>
                            </Link>
                        </li>
                        <li> <Link to={`/boards/${this.props.board.id}`}>
                                <p> {this.props.board.numPins ? this.props.board.numPins : 0} Pins </p>
                            </Link>
                        </li>
                        {editButton}  
                    </div>  
                </div>             
            </li>);
    }
};

export default BoardViewItem;