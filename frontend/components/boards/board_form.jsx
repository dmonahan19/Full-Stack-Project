import React from 'react';

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
    const user = Object.assign({}, this.state);
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
        <form onSubmit={this.handleSubmit} >
            <h2>Create a Board</h2>
          <div onClick={this.props.closeModal}>X</div>
          {this.renderErrors()}
          <div>
            <br/>
            <label>Name:
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value="Create" />
            <button>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default (BoardForm);