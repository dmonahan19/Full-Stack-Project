import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BoardIndexContainer from './board_index_container';
import BoardViewTwoContainer from './board_view_two_container';

class PickBoardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBoard: false
        };
        this.showBoardView1 = this.showBoardView1.bind(this);
        this.showBoardView2 = this.showBoardView2.bind(this);
    }

    showBoardView1() {
        this.setState({ showBoard: false });
    }

    showBoardView2() {
        this.setState({ showBoard: true });
    }


    render() {
        if (!this.props.user) {
            return null;
        }
        let view;
       this.state.showBoard ?
           view = <BoardIndexContainer /> :
           view =  <BoardViewTwoContainer /> 
         

        return (
            <>
                <div className="profile-user-info2">
                    <div>
                        <ul className="boardpin-links">
                            <li className='board-link'><Link to={`/users/${this.props.user.id}/boards`}>Boards</Link></li>
                            <li className='pin-link'><Link to={`/users/${this.props.user.id}/pins`}>Pins</Link></li>
                        </ul>
                    </div>
                    <ul className='menu-links'>
                        <button onClick={this.showBoardView1}className='menu menu1'><svg className="gUZ pBj U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="Wide view" role="img"><title>Wide view</title><path d="M13.00,20.00 L13.00,13.00 L20.00,13.00 L20.00,20.00 L13.00,20.00 Z M4.00,11.00 L4.00,4.00 L11.00,4.00 L11.00,11.00 L4.00,11.00 Z M13.00,11.00 L13.00,4.00 L20.00,4.00 L20.00,11.00 L13.00,11.00 Z M4.00,20.00 L4.00,13.00 L11.00,13.00 L11.00,20.00 L4.00,20.00 Z"></path></svg></button>
                        <button onClick={this.showBoardView2} className='menu'> &#9776; </button>
                    </ul>
                </div>
                {view}
            </>

        )
    }

}

export default withRouter(PickBoardView)