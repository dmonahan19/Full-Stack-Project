import React from 'react'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class DropDownTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
        this.showDropDowntwo = this.showDropDowntwo.bind(this)
    }

    showDropDowntwo() {
        const dropdown = this.state.dropdown;
        this.setState({ dropdown: !dropdown });
    }



    render() {
        return (
            <>
                <div>
                    {this.state.dropdown ?
                        <>
                            <ul className='drop-down'>
                                <li className='create-pin'>
                                    <Link to='/pin-builder'>Create Pin</Link>
                                </li>
                            </ul>
                        </>
                        : null}
                    <ul className="editlinks">
                        <li><button onClick={this.showDropDowntwo} className="plus">+</button></li>
                        <li className='dontshow'><button onClick={() => this.props.openModal('editboardform', this.props.match.params.boardId)} >
                            <img className="edit-img" src={window.pencil} />
                        </button></li> 
                    </ul>
                </div>
            </>

        )
    }

}

export default withRouter(DropDownTwo)