import React from 'react'

class ProfileForm extends React.Component{
  
    constructor(props){
      super(props);
      this.state = {
        first_name: '',
        last_name: '',
        about_you: '',
        location: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e){
      e.preventDefault();
      const user = Object.assign({},this.state);
      this.props.updateUser(user);
    }
  
  
    update(field){
      return (e) => {
        this.setState({
          [field]: e.target.value});
      };
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
  
  
    render(){
      return(
        <form className="profileform" onSubmit={this.handleSubmit}>
            <h2 className='pro-h1'>Profile</h2> 
            <div className='names-input'>
            <label className='profile-label'>
              First Name
              <br/>
              <input className="name-input" type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
            </label>
            <label className='profile-label'>
                Last Name
                <br/>
              <input className="name-input" type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
            </label>
          </div>
          <br/>
          <label>
              About you
              <br/>
             <input className="profile-about" type="text" value={this.state.about_you} onChange={this.update('about_you')}/>
          </label>
          <br/>
          <label>
              Location
              <br/>
             <input className="location" type="text" value={this.state.location} onChange={this.update('location')}/>
          </label>
          <br/>
          <input type='submit' value="Save" />
         
          <br/>
        </form>
      )
    }
}
  
  export default ProfileForm