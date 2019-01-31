import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class PinEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doubleClick = this.doubleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pin.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pin.id != this.props.pin.id) {
            this.props.fetchPin(this.props.pin.id);
        }
    }

    doubleClick() {
        this.props.closeModal();
        this.props.deletePin(this.props.pin.id);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const pin = Object.assign({}, this.state);
        this.props.updatePin(pin).then(this.props.closeModal);
    }


    render() {
     
        return (
            <div >
                <form className='edit-board-form' onSubmit={this.handleSubmit} >
                    <div className='edit-board-x' onClick={this.props.closeModal}>X</div>
                    <div className='top-board-edit-form'>
                        <h2 className='edit-board-form-h2'>Edit Your Pin</h2>
                    </div>

                    <label>Name
              <input className='edit-board-form-input' type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder='Like "Places to Go" or "Recipies to Make"'
                        />
                    </label>
                    <label>Description
              <input className='edit-board-form-input-des' type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="What's your board about?"
                        />
                    </label>
                    <div className='edit-board-form-buttons'>
                        <div>
                            <Link to={`/boards/${this.props.pin.board_id}`}><button onClick={this.doubleClick}>Delete</button></Link>
                            <button onClick={this.props.closeModal} className='edit-cancel-submit'>Cancel</button>
                            <input className="edit-board-submit" type="submit" value="Save" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(PinEditForm);