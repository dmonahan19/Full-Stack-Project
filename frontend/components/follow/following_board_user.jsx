import React from 'react';
import { withRouter } from 'react-router-dom';
import FollowingContainer from './following_container';
import FollowingBoardContainer from './following_board_container';


class FollowingBoardUser extends React.Component {
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
        let photo;
        let view;
        
        let boardFollowers = this.props.user.following_boardIds.length;
        let userFollowers = this.props.user.following_userIds.length;

        if (this.props.user.photo) {
            photo = this.props.user.photo;
        }
        else {
            photo = window.empty;
        }
     
        this.state.showBoard ?
            view = <FollowingBoardContainer /> :
            view = <FollowingContainer /> 
        
        
            

        return (
            <>
                <div className='main-profile'>
                
                    <div className="profile-user-info">
                        <div>
                            <ul className="follow-links-2">
                                <li className='number-followers'>{boardFollowers + userFollowers}</li>
                                <li className='following-word'>following</li>
                            </ul>
                            <ul className='left-edit boardpin-links2'>
                                <li><button onClick={this.showBoardView1} className='board-link2'>People</button></li>
                                <li><button onClick={this.showBoardView2} className='pin-link2'>Boards</button></li>
                            </ul>
                        </div>
                        <ul>
                            <li><img className="profile-picture" src={photo} /></li>
                        </ul>
                    </div>
                </div>
                <div className='bottom-view'>      
                    {view}
                </div>
            </>

        )
    }

}

export default withRouter(FollowingBoardUser)