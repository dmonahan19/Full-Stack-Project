import React from 'react'
import PinUserIndexItem from './pin_user_index_item'
import CreatePin from './create_pin'

class PinUserIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUserPins(this.props.user.id)

    }

    componentDidUpdate(prevProps) {
        if (prevProps.user.id != this.props.user.id) {
            this.props.fetchUserPins(this.props.user.id);
        }
    }

    render(){
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        this.props.currentUserId === this.props.user.id ?
        col1.push(<CreatePin key={0} />) : null;
        let i = 1;

        this.props.pins.forEach((pin) => {
            if (i % 4 === 1) {
                col1.push(<PinUserIndexItem key={i}
                    pin={pin}
                    openModal={this.props.openModal}
                />);
            }
            if (i % 4 === 2) {
                col2.push(<PinUserIndexItem  key={i}
                    pin={pin}
                    openModal={this.props.openModal}
                    />);
            }
            if (i % 4 === 3) {
                col3.push(<PinUserIndexItem key={i}
                    openModal={this.props.openModal}
                    pin={pin}
                     />);
            }
            if (i % 4 === 0) {
                col4.push(<PinUserIndexItem key={i}
                    openModal={this.props.openModal}
                    pin={pin}
                     />);
            }
            i++;
        });

        return (
            <>

                <div className='row2'>
                    <div className="row">
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
export default PinUserIndex