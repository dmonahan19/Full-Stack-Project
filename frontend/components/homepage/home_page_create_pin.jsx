import React from 'react'
import { withRouter } from 'react-router-dom'
import BoardIndexThreeContainer from '../boards/board_index_two_container'

class HomePageCreatePin extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.fetchPin(this.props.pin.id).then(() => {
            this.setState(this.props.pin);
        })
        this.props.fetchBoards();
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.closeModal();
    }

    render() {
      

        return (

            <div className='pin-create-form-background2'>
                <form onSubmit={this.handleSubmit}>
                    <div className='pin-show-selector2'>
                        <BoardIndexThreeContainer pin={this.props.pin} />
                    </div>
                </form>

            </div>

        )
    }
}

export default withRouter(HomePageCreatePin);
