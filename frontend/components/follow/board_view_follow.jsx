// import React from 'react';
// import FollowButton4 from './follow_button_4';
// import PinBoardViewTwo from '../pins/pin_board_view_two';
// import { Link } from 'react-router-dom';

// class BoardViewFollow extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { showSave: false };

//         this.onHover = this.onHover.bind(this);
//         this.offHover = this.offHover.bind(this);

//     }

//     componentDidMount() {
//         this.props.fetchBoard(this.props.boardId);
//         this.props.fetchPins(this.props.boardId);
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.user.id != this.props.user.id) {
//             this.props.fetchBoard(this.props.boardId);
//             this.props.fetchPins(this.props.boardId)
//         }
//     }


//     onHover(e) {
//         this.setState({ showSave: true });
//     }

//     offHover(e) {
//         this.setState({ showSave: false });
//     }



//     render() {
//        if (!this.props.boardId){
//            return null;
//        }
//         let editButton;
//         let boardPins = this.props.boards.filter(board => board.id === this.props.boardId)
//         if (this.props.currentUserId === this.props.user.id) {
//             editButton = <div>
//                 {
//                     this.state.showSave ? (
//                         <li className='board-view-edit'><button onClick={() => this.props.openModal('editboardform', this.props.board.id)} >
//                             <img className="board-view-edit" src={window.pencil} />
//                         </button></li>) : (null)
//                 }
//             </div >
//         }
//         else {
//             editButton = <FollowButton4
//                 createFollow={this.props.createFollow}
//                 deleteFollow={this.props.deleteFollow}
//                 board={this.props.board}
//                 user={this.props.user}
//             />
//         }

//         const pins = this.props.pins.filter(pin => pin.board_id === this.props.boardId)



//         return (
//             <div className='board-view' onMouseEnter={this.onHover}
//                 onMouseLeave={this.offHover}>
//                 <div>
//                     <PinBoardViewTwo pins={pins} />
//                     <div className='board-view-info'>
//                         <li><Link to={`/boards/${this.props.follow.following_id}`}>
//                             <h2 className='board-view-title'>{this.props.follow.title} </h2>
//                         </Link>
//                         </li>
//                         <div className='flex-edit'>
//                             {/* <li> 
//                                 <Link to={`/boards/${this.props.boardId}`}>
//                                     <p> {boardPins[0].numPins ? boardPins[0].numPins : 0} Pins </p>
//                                 </Link>
//                             </li> */}
//                             {editButton}
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         );
//     }
// };

// export default BoardViewFollow;