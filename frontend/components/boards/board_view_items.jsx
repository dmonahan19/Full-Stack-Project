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
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let col6 = [];
        this.props.pins.forEach((pin, i) => {
                if (i === 0) {
                    col1.push(<img src={pin.photo}></img>);
                }
                if (i === 1) {
                    col2.push(<img src={pin.photo}></img>);
                }
                if (i === 2) {
                    col3.push(<img src={pin.photo}></img>);
                }
                if (i  === 3) {
                    col4.push(<img src={pin.photo}></img>);
                }
                if (i === 4) {
                    col5.push(<img src={pin.photo}></img>);
                }
            if (i === 4) {
                col6.push(<img src={pin.photo}></img>);
            }
        });
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
                <div className='board-index' onMouseEnter={this.onHover}
                    onMouseLeave={this.offHover}>
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
                    <ul className="left-board-index">
                        <div className="picture-name">
                             <li><Link to={`/boards/${this.props.board.id}`}>
                                <h2 className='board-title'>{this.props.board.title} </h2>
                            </Link></li>
                        </div>
                        <ul className="right-board-index">

                            <li> <Link to={`/boards/${this.props.board.id}`}>
                                <p> {this.props.board.numPins ? this.props.board.numPins : 0} Pins </p>
                            </Link></li>

                            <li><Link to={`/boards/${this.props.board.id}`}>
                                <p>7 days ago</p>
                            </Link></li>
                            <div>
                                {editButton}
                            </div>
                        </ul>
                    </ul>
                </div>

            </li>);
    }
};

export default BoardViewItem;