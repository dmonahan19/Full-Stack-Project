import React from 'react';
import { Link } from 'react-router-dom';
import PinBoardViewTwo from '../pins/pin_board_view_two';
import FollowButton4 from '../follow/follow_button_4';



class BoardViewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showSave: false };

        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);

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
                        <li className='board-view-edit'><button onClick={() => this.props.openModal('editboardform', this.props.board.id)} >
                            <img className="board-view-edit" src={window.pencil} />
                        </button></li>) : (null)
                }
            </div >
        }
        else {
            editButton = <FollowButton4
                createFollow={this.props.createFollow}
                deleteFollow={this.props.deleteFollow}
                board={this.props.board}
                user={this.props.user}
                currentUserId={this.props.currentUserId}
                currentUser={this.props.currentUser}
            />
        }

        const pins = this.props.pins.filter(pin => pin.board_id === this.props.board.id)

        

        return (
                <div className='board-view' onMouseEnter={this.onHover}
                    onMouseLeave={this.offHover}>
                    <div>
                        <PinBoardViewTwo pins={pins} />
                        <div className='board-view-info'>
                            <li><Link to={`/boards/${this.props.board.id}`}>
                                    <h2 className='board-view-title'>{this.props.board.title} </h2>
                                </Link>
                            </li>
                            <div className='flex-edit'>
                                <li> <Link to={`/boards/${this.props.board.id}`}>
                                        <p> {this.props.board.numPins ? this.props.board.numPins : 0} Pins </p>
                                    </Link>
                                </li>
                                {editButton}
                            </div>

                        </div>
                    </div>  
                </div>             
            );
    }
};

export default BoardViewItem;