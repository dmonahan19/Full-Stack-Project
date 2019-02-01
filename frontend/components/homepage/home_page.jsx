import React from 'react'
import PinHomeIndexItem from '../pins/pin_home_index_item'


class HomePage extends React.Component {

    constructor(props){
        super(props)
    }
    
    
    componentDidMount() {
        this.props.fetchUsersPins()
        this.props.fetchBoards()

    }



    render() {
        debugger
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        this.props.pins.forEach((pin, i) => {
            if (i % 4 === 0) {
                col1.push(<PinHomeIndexItem key={i}
                    pin={pin}
                    openModal={this.props.openModal}
                    boards={this.props.boards} />);
            }
            if (i % 4 === 1) {
                col2.push(<PinHomeIndexItem key={i}
                    pin={pin}
                    openModal={this.props.openModal}
                    boards={this.props.boards} />);
            }
            if (i % 4 === 2) {
                col3.push(<PinHomeIndexItem key={i}
                    pin={pin}
                    openModal={this.props.openModal} 
                    boards={this.props.boards}/>);
            }
            if (i % 4 === 3) {
                col4.push(<PinHomeIndexItem key={i}
                    pin={pin}
                    openModal={this.props.openModal}
                    boards={this.props.boards} />);
            }
        });


        return (
            <>

                <div className='splash3'>
                    <div className="row3">
                        <div className="column3">
                            {col1}
                        </div>
                        <div className="column3">
                            {col2}
                        </div>
                        <div className="column3">
                            {col3}
                        </div>
                        <div className="column3">
                            {col4}
                        </div>
                    </div>
                </div>



            </>
        )
    }

}
export default HomePage