import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BoardIndexContainer from './board_index_container';
import BoardViewTwoContainer from './board_view_two_container';
import BoardViewThreeContainer from './board_view_three_container';

class PickBoardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBoard: 1,
            showOrder: "4"
        };
        this.showBoardView1 = this.showBoardView1.bind(this);
        this.showBoardView2 = this.showBoardView2.bind(this);
        this.showBoardView3 = this.showBoardView3.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

    showBoardView1() {
        this.setState({ showBoard: 1 });
    }

    showBoardView2() {
        this.setState({ showBoard: 2});
    }

    showBoardView3() {
        this.setState({ showBoard: 3});
    }



    handleChange(e) {
        this.setState({ showOrder: event.target.value });
    }



    render() {
        let select
        if (!this.props.user) {
            return null;
        }
        let view;
       this.state.showBoard === 1 ?
           view = <BoardViewTwoContainer showOrder={this.state.showOrder}/> : 
                this.state.showBoard === 2 ? 
               view = <BoardViewThreeContainer showOrder={this.state.showOrder}/> :
               view = <BoardIndexContainer showOrder={this.state.showOrder} /> 
        if(this.props.pins.length > 0){
              select = <select onChange={this.handleChange} value={this.state.showOrder} className='view-selector'>
                   <option value={4}>Last saved to</option>
                   <option value={1}>A-Z</option>
                   <option value={2}>Newest</option>
                   <option value={3}>Oldest</option>
               </select>
        }

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
                        <button onClick={this.showBoardView2} className='menu menu1'><svg className="gUZ B9u U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="square view" role="img"><title>square view</title><path d="M16.00,20.00 L20.00,20.00 L20.00,16.00 L16.00,16.00 L16.00,20.00 Z M10.00,8.00 L10.00,4.00 L14.00,4.00 L14.00,8.00 L10.00,8.00 Z M4.00,8.00 L4.00,4.00 L8.00,4.00 L8.00,8.00 L4.00,8.00 Z M16.00,8.00 L16.00,4.00 L20.00,4.00 L20.00,8.00 L16.00,8.00 Z M4.00,14.00 L4.00,10.00 L8.00,10.00 L8.00,14.00 L4.00,14.00 Z M10.00,14.00 L10.00,10.00 L14.00,10.00 L14.00,14.00 L10.00,14.00 Z M16.00,14.00 L16.00,10.00 L20.00,10.00 L20.00,14.00 L16.00,14.00 Z M4.00,20.00 L4.00,16.00 L8.00,16.00 L8.00,20.00 L4.00,20.00 Z M10.00,20.00 L10.00,16.00 L14.00,16.00 L14.00,20.00 L10.00,20.00 Z"></path></svg> </button>
                        <button onClick={this.showBoardView3} className='menu'> &#9776; </button>
                        {select}
                    </ul>
                </div>
                {view}
            </>

        )
    }


    

}

export default withRouter(PickBoardView)