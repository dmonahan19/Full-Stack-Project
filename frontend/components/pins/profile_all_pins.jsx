import React from 'react';
import ProfileContainer from '../profile/profile_container'
import PinUserIndexContainer from './pin_user_index_container'
// import CreateBoardContainer from './create_board_container'

class ProfileAllPins extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (

            <>
                <div className="board-profile">
                    <>
                        <div className="board-profile-divs">
                            <div>{ < ProfileContainer />}</div>
                            <div className='pin-user-index-container'>{<PinUserIndexContainer />} </div> :
                        </div>
                    </>
                </div>
            </>
        )

    }
}

export default ProfileAllPins;