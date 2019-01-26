import React from 'react'
import { Link } from 'react-router-dom';
import ChangePicture from './change_picture'

class ProfileForm extends React.Component{
  
    constructor(props){
      super(props);
      this.state = this.props.user
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    handleSubmit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('user[first_name]',this.state.first_name)
      formData.append('user[last_name]',this.state.last_name)
      formData.append('user[about_you]',this.state.about_you)
      formData.append('user[location]',this.state.location)
      if (this.props.photoFile){
        formData.append('user[photo]',this.props.photoFile)
      }
      this.props.updateUser(formData,this.props.currentUserId)
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
            <label>
              First Name
              <br/>
              <input className="name-input" type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
            </label>
            <label>
                Last Name
                <br/>
              <input className="name-input" type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
            </label>
          </div>
          <br/>
        
          <div className="photo-combo">
            <div></div>
            <div className='picture-label'>Picture</div> 
            <div className='photo-combo2'>
            {this.props.user.photo ? 
              <img className="profile-picture2" src={this.props.user.photo}/> : 
              <img className="profile-picture2" src={window.empty}/> }
              <button onClick={this.props.showPicture} className='change-picture'>Change picture</button>
            </div>

          </div>

          <br/>
          <label className="combined-location">
              <div className="aboutyou-label">About you</div>
              <br/>
            <div>
              <div>
                <input className="profile-about" type="text" value={this.state.about_you} onChange={this.update('about_you')}/>
             </div>
            </div>
          </label>
          <br/>
          <label>
              <div className="location-label">Location</div>
              <br/>
             <input className="location" type="text" value={this.state.location} onChange={this.update('location')}/>
          </label>
          <br/>
          <div className="bottom-buttons">
          <Link className='cancel' to="/">Cancel</Link>
          <input className="profile-save "type='submit' value="Save" />
          </div>
         
          <br/>
        </form>
      )
    }
}
  
  export default ProfileForm