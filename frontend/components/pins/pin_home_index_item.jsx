import React from 'react';
import { Link } from 'react-router-dom';


class PinHomeIndexItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { showSave: false }

        this.onHover = this.onHover.bind(this)
        this.offHover = this.offHover.bind(this)

    }

    onHover(e) {
        this.setState({ showSave: true })
    }

    offHover(e) {
        this.setState({ showSave: false })
    }



    render() {
        return (
            <div className='whole-image-save'
                onMouseEnter={this.onHover}
                onMouseLeave={this.offHover}
            >
                {this.state.showSave ? (
                    <>
                        {/* <button className='drop-down-boards' onClick={() => this.props.openModal('boardList')}>{this.props.boards[0].title}</button> */}
                    <button className='button4' >
                        <div className='whole-pin-button'>
                            <icon className='fas fa-thumbtack pin-index-icon'></icon>
                            <h1 className="pin-index-submit">Save</h1>
                        </div>
                    </button> </>) : (null)}

                <Link to={`/pin/${this.props.pin.id}`}><img className='image4-hover' src={this.props.pin.photo} /></Link>
                <div className='pin-show-page-title'>{this.props.pin.title}</div>
            </div>


        );
    }
}

export default PinHomeIndexItem;
