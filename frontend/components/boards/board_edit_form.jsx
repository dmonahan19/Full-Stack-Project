import React from 'react';
import { withRouter } from 'react-router-dom';


class BoardEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doubleClick = this.doubleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.board.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.board.id != this.props.board.id) {
      this.props.fetchBoard(this.props.board.id);
    }
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.updateBoard(board).then(this.props.closeModal);
  }

  doubleClick(){
    this.props.closeModal();
    this.props.deleteBoard(this.props.board.id);
  }




  render() {
    return (
      <div >
        <form className='edit-board-form' onSubmit={this.handleSubmit} >
          <div className='edit-board-x' onClick={this.props.closeModal}>X</div>
          <div className='top-board-edit-form'>
              <h2 className='edit-board-form-h2'>Edit Your Board</h2>
          </div>
       
            <label>Name
              <input className= 'edit-board-form-input' type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder= 'Like "Places to Go" or "Recipies to Make"'
              />
            </label>
            <label>Description
              <input className= 'edit-board-form-input-des' type="text"
                value={this.state.description}
                onChange={this.update('description')}
                placeholder= "What's your board about?"
              />
            </label>
    
            <div className='edit-board-form-buttons'>
                
                <button className='edit-delete-submit' onClick={this.doubleClick}>Delete</button>
              <div>
            
                <button onClick={this.props.closeModal} className='edit-cancel-submit'>Cancel</button>
                <input className="edit-board-submit" type="submit" value="Save" />
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BoardEditForm);