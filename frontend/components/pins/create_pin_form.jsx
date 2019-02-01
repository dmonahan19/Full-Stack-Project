import React from 'react'
import {withRouter} from 'react-router-dom'
import BoardIndexTwoContainer from '../boards/board_index_two_container'


class CreatePinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.fetchPin(this.props.pin.id).then(() => {
            this.setState(this.props.pin)
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
      
        this.props.closeModal()
    }

    render() {
        //  const boards = this.props.boards.map((board, i) => {
        //     return (
        //         <option value={board.id} key={i}> {board.title} </option>
        //     );
        // });
       
        return (

            <div className='pin-create-form-background'>
                    <form onSubmit={this.handleSubmit}>
                    <div className='pin-create-board-x' onClick={this.props.closeModal}>X</div>
                    <h1 className='pin-create-form-h1'> Choose a board </h1>
                    <div className='pin-show-selector'>
                        <BoardIndexTwoContainer pin={this.props.pin} />
                    </div>
                    {/* <input className='pin-show-submit'  type='submit' value='Save'></input> */}
                    </form>
    
                <div class-name='photo-fit'>
                    <div className='pin-show-photo'>
                        <img className='pin-photo-img' src={this.props.pin.photo}></img>
                    </div>
                </div>
               
            </div>
      
                      )}
}

export default withRouter(CreatePinForm);




