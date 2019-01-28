import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.createBoard(board).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div >
        <form className='board-form' onSubmit={this.handleSubmit} >
          <div className='board-x' onClick={this.props.closeModal}>X</div>
          <div className='top-board-form'>
              <h2 className='board-form-h2'>Create board</h2>
          </div>
       
            <label>Name
              <input className= 'board-form-input' type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder='Like "Places to Go" or "Recipies to Make"'
              />
            </label>
            <div className='board-form-buttons'>
              <div>
                <button onClick={this.props.closeModal} className='cancel-submit'>Cancel</button>
                <input className="board-submit" type="submit" value="Create" />
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BoardForm);