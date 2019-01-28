import React from 'react';
import ProfileContainer from '../profile/profile_container'
import CreateBoard from './create_board'


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
                    <div>{<CreateBoard />} </div>
                </div>
                </>    
            </div>
            </>
            )

}}
    
export default Boards;