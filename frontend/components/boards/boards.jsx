import React from 'react';
import ProfileContainer from '../profile/profile_container'
// import CreateBoardContainer from './create_board_container'
import BoardIndexContainer from './board_index_container'


class Boards extends React.Component{
    constructor(props){
        super(props)
     
    }
       
    render(){
       
        return(

            <>
            <div className="board-profile">
                <>
                <div className="board-profile-divs">
                    <div>{<ProfileContainer  />}</div>
                    <div>{<BoardIndexContainer />} </div>
                </div>
                </>    
            </div>
            </>
            )

}}
    
export default Boards;