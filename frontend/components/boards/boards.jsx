import React from 'react';
import ProfileContainer from '../profile/profile_container';
import BoardIndexContainer from './board_index_container';
import CreateBoardContainer from './create_board_container';
import BoardViewTwoContainer from './board_view_two_container';
import PickBoardViewContainer from './pick_board_view_container';

class Boards extends React.Component{
    constructor(props){
        super(props);
     
    }
       
    render(){
       
        return(

            <>
            <div className="board-profile">
                <>
                <div className="board-profile-divs">
                    <div>{<ProfileContainer />}</div>
                    <div>{<PickBoardViewContainer />}</div>
                    <div>{<CreateBoardContainer />}</div>
                </div>
                </>    
            </div>
            </>
            )

}}
    
export default Boards;