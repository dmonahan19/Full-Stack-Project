import React from 'react';
import ProfileForm from './profile_form_container'
import ChangePicture from './change_picture'

class FullProfileForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showPicture: false,
            photoFile: null
        }
        this.showPicture = this.showPicture.bind(this)
      this.handleFile = this.handleFile.bind(this);
    }
    showPicture(){
        const showPicture= this.state.showPicture;
        this.setState({showPicture: !showPicture});
      }

      handleFile(e){
        // debugger
        const showPicture= this.state.showPicture;
        this.setState({photoFile: e.currentTarget.files[0], showPicture: !showPicture})
   
      }
  

    render(){
        return(

            <>
            <div className='container'>
                {this.state.showPicture ?
                <>
                <div className='change-pic'>{<ChangePicture handleFile={this.handleFile} showPicture={this.showPicture}/>}</div>
                <div className='profile-black-opacity'></div>
                <div className='profile-form'>{<ProfileForm photoFile={this.state.photoFile} showPicture={this.showPicture}/>}</div>
                </> 
                :
            
                <div className='profile-form'>{<ProfileForm photoFile={this.state.photoFile} showPicture={this.showPicture}/>}</div> }
            </div>
            </>
            )

}}
    
export default FullProfileForm;