import React from 'react'
import PinUserIndexItem from './pin_user_index_item'
import CreatePin from './create_pin'

class PinUserIndex extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUserPins(this.props.currentUserId)

    }

    render(){
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];

        this.props.pins.forEach((pin, i) => {
            if (i % 4 === 0) {
                col1.push(<PinUserIndexItem key={i}
                    pin={pin}
                    />);
            }
            if (i % 4 === 1) {
                col2.push(<PinUserIndexItem  key={i}
                    pin={pin}
                    />);
            }
            if (i % 4 === 2) {
                col3.push(<PinUserIndexItem key={i}
                    pin={pin}
                     />);
            }
            if (i % 4 === 3) {
                col4.push(<PinUserIndexItem key={i}
                    pin={pin}
                     />);
            }
         
        });

        return (
            <>

                <div className='splash2'>
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