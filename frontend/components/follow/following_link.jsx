import React from 'react';
import FollowingPinItem from './following_pin_item';


class FollowingLink extends React.Component {

    
    componentDidMount(){
        this.props.fetchUserPins(this.props.user.follower_userIds);
    }
        


    render() {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let i = 0;
        this.props.pins.map((pin) => {
                if (i % 4 === 0) {
                    col1.push(<FollowingPinItem
                        key={i}
                        pin={pin}
                        openModal={this.props.openModal}
                    />);
                }
                if (i % 4 === 1) {
                    col2.push(<FollowingPinItem
                        pin={pin}
                        openModal={this.props.openModal}
                    />);
                }
                if (i % 4 === 2) {
                    col3.push(<FollowingPinItem
                        pin={pin}
                        openModal={this.props.openModal}
                    />);
                }
                if (i % 4 === 3) {
                    col4.push(<FollowingPinItem
                        pin={pin}
                        openModal={this.props.openModal}
                    />);
                }
                i++
        });
        return (
            <>
                <div className='splash3'>
                    <div className="row2">
                        <div className="column2">
                            {col1}
                        </div>
                        <div className="column2">
                            {col2}
                        </div>
                        <div className="column2">
                            {col3}
                        </div>
                        <div className="column2">
                            {col4}
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
export default FollowingLink