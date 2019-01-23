import React from 'react'

class SessionForm extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({},this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => {
      this.setState({
        [field]: e.target.value});
    };
  }

  // toggleSpan(){
  //   this.props.formType === 'Log in' ? <SignupFormContainer/>: <LoginFormContainer/> }
  // }



  renderErrors() {
    debugger
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


  render(){
    return(
      <form className="sessionform session" onSubmit={this.handleSubmit}>
        <div className="session-space-1">
          <img className='session-logo' src={window.logo} />
          <h1 className="sessionheader">{this.props.formType} to see more</h1>
          <div className='sessiontext'>Access Pixtrest's best ideas with a <br/> free acount</div> 
        </div>
        {this.renderErrors()}
         <label>
           
           <input type="text" value={this.state.email}  placeholder="Email" onChange={this.update('email')}/>
         </label>
         <br/>
        <label>
           <input type="password" value={this.state.password} placeholder={this.props.formType === 'Log in' ? 'Password' : 'Create a password'} onChange={this.update('password')}/>
        </label>
        <br/>
        <input type='submit' value={this.props.formType === 'Log in' ? 'Log in' : 'Continue'} />
        <br/>

        <> 
        <span className="session-span" onClick={this.props.toggleSignup}>{this.props.formType === 'Log in' ? 'Not on Pixtrest yet? Sign up': 'Already a member? Log in'}</span>   
        </>

      </form>
    )}
}

export default SessionForm