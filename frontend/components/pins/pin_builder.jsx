import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class PinBuilder extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            website_url: '',
            boardId: "",
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handelSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.navigateToShowBoards = this.navigateToShowBoards.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards(this.props.currentUserId);

    }


    navigateToShowBoards() {
        const url = `/users/${this.props.currentUserId}`;
        this.props.history.push(url);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }



    update(field) {
        return e => {
    
          this.setState({
          [field]: e.currentTarget.value
        });};
      }
      
    handelSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[board_id]', this.state.boardId);
        formData.append('item[website_url]', this.state.website_url);
        formData.append('item[photo]', this.state.photoFile);
        this.props.createItem(formData);
        if (this.props.errors){
            this.navigateToShowBoards();
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render(){
        const boards = this.props.boards.map((board,i) => {
            return (
                <option value={board.id} key={i}> {board.title} </option>
            );
          });
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
        return (
            <div className='pin-background'>
              <form className='pin-form' onSubmit={this.handleSubmit} >
                <div className='pin-buttons'>
                        <Link to={`/users/${this.props.currentUserId}/boards`}><button className= 'pin-home-button'>Home</button></Link>
                    <div>
                        <icon className='fas fa-thumbtack pin-icon'></icon>
                            <button><input className="pin-submit" type="submit" value="Save" /></button>
                    </div>
                </div>
              <div className='pin-form-float'>
                
                {this.state.photoUrl ? <label className='pin-photo-preview'><img className='pin-photo-preview'src={this.state.photoUrl} /></label> :
                <label className='pin-photo'>
                <i className="fas fa-camera fa-lg"></i>
                <br/>
          
                Click to upload
                    <input className='pin-photo' type="file"
                        value={this.state.photo}
                        onChange={this.handleFile.bind(this)}
                        />
                        </label>  }
   


                <div className='pin-builder-left-side'>
                    <label>
                        <input className='pin-title' type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder='Add a title'
                        />
                    </label>
                    <div className='pin-profile-info'>
                        <div>   
                            <img className="pin-profile-picture" src={this.props.user.photo} />
                        </div>
                       
                        <div className='pin-name-followers'>
                            <h2 className='pin-form-username'>{this.props.user.first_name}</h2>
                                    <p className='pin-form-followers'>{this.props.user.follower_userIds.length} followers</p>
                           
                        </div>
                    </div>

                    <li><label className='say-more-about-pin'>
                       <input className='say-more-about-pin' type="text"
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder='Say more about this Pin'/>
                            </label></li>
                    <div className='bottom-pin-form'>
                        <label>
                            <input className='pin-url' type="text"
                            value={this.state.website_url}
                            onChange={this.update('website_url')}
                            placeholder='Add the URL this pin links to'
                            />
                        </label>
                        
                        <label>
                            <select className='pin-selector' value={this.state.boardId} onChange={this.update('boardId')}>
                                <option value='' disabled={true}>Choose a board (required)</option>
                                { boards }
                            </select>
                            <div className='pin-errors'>
                                {this.renderErrors()}
                            </div>
                        </label>
                    </div>
                </div>
                </div>
              </form>
            </div>
          );
        }
       
    }





export default withRouter(PinBuilder)