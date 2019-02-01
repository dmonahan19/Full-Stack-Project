import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{ 

    constructor(props){
        super(props)
            this.state = {
                searchUser: ''
            }
        
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }



    render(){
    let photo
    let user
    if (this.props.currentUserId){   
        if(this.props.user.photo){
                photo = <img className="nav-profile-picture" src={this.props.user.photo}/>
            }
        else if(this.props.user.first_name){
            photo = <div className="nav-photo">{this.props.user.first_name[0]}</div>
        }
        else{
                photo = <div className="nav-photo">{this.props.user.email[0]}</div>
        }
       if(this.props.user.first_name){
            user = this.props.user.first_name
        }
        else{
            user = this.props.user.email.split("@")[0]  
        }
    return(
    <div>
        <>
        <nav className='nav'>
                <ul className="left-nav">
                    <li> <Link to="/"> <img className='nav-logo' src={window.logo} /></Link></li>
                    <li><i className="fa fa-search fa-lg nav-icon"></i></li>
                        <li className="searchbar"><input type="search" value={this.state.searchUser} onChange={this.update('searchUser')} placeholder="Search"/></li>
                    <ul className="navlinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/following">Following</Link></li>

                        <div className="nav-photo-name">
                            <li><Link to={`/users/${this.props.currentUserId}`}>{photo}</Link></li>
                            <li><Link to={`/users/${this.props.currentUserId}`}>{user}</Link></li>
                        </div>
                        <li ><button className='buttonnav' onClick={this.props.logout}>Log Out</button></li>
                    </ul>
                </ul>
        </nav>
        </>
          
    </div>
    
    )}
    else{
        return null;
    }

//   return props.currentUser ? showNavBar() : sessionLinks()
    }

}

export default NavBar;