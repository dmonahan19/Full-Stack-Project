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
        const showPicture= this.state.showPicture;
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({photoFile: file, photoUrl: fileReader.result, showPicture: !showPicture});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    
      
    render(){
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return(

            <>
            <div className='container'>
                {this.state.showPicture ?
                <>
                <div className='change-pic'>{<ChangePicture handleFile={this.handleFile} showPicture={this.showPicture}/>}</div>
                <div className='profile-black-opacity'></div>
                </> 
                : null}
                   <div className='profile-form'>{<ProfileForm photoFile={this.state.photoFile} photoUrl={this.state.photoUrl} showPicture={this.showPicture}/>}</div>
            </div>
            </>
            )

}}
    
export default FullProfileForm;