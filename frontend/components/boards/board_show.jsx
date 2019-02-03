import React from 'react';
import DropDownTwo from './drop_down_two'
import PinIndexItem from '../pins/pin_index_item'
import PinBoardShow from '../pins/pin-board-show'
import withRouter from 'react-router-dom'


class BoardShow extends React.Component{

    constructor(props){
        super(props)
    
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
        this.props.fetchPins(this.props.match.params.boardId)
    }


    

    render(){
          return (
            <>
                <div className='board-show-top'>
                    <ul className='left-board-show-edit'>
                        <ul className="show-editlinks">
                              <DropDownTwo openModal={this.props.openBoardModal} />
                        </ul>
                    </ul>
                    <div className="show-info">
                        <div>
                            <h1 className="board-show-title">{this.props.board.title}</h1>
                            <ul className="follow-pin-links">
                                <li className="pin-follows1">24 pins</li>
                                <li><span className="dot pin-follow2"></span></li>
                                <li className="follow3"> 130 followers </li>
                            </ul>
                            <ul className='show-about-links'>
                                <li className="about-description">{this.props.user.description}</li>
                            </ul>
                        </div>
                        <ul>
                            <li><img className="show-profile-picture" src={this.props.user.photo} /></li>
                        </ul>
                    </div>
                    <div className="show-profile-user-info2">
                        <div>
                            <ul className="show-boardpin-links">
                                <li className='show-board-link'><button>Your Pins</button></li>
                                
                            </ul>
                        </div>
                        <ul>
                            <li className='show-menu'> &#9776; </li>
                        </ul>
                    </div>

                </div>
          

                <PinBoardShow pins={this.props.pins} openModal={this.props.openPinModal} user={this.props.user}/>
            </>
        )
    }
}


export default (BoardShow)