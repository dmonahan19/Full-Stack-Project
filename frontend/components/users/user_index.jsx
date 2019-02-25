import React from 'react';
import { Link } from 'react-router-dom';


class UserIndex extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        let userName;
        let photo;
        if (this.props.user.first_name && this.props.user.last_name) {

            userName = `${this.props.user.first_name} ${this.props.user.last_name}`;
        }
        else if (this.props.user.first_name) {
            userName = this.props.user.first_name;
        }
        else {
            userName = null;
        }

        if (this.props.user.photo) {
            photo = this.props.user.photo;
        }
        else {
            photo = window.empty;
        }
       


        return (
            <>
            <div className='search-results'>
                    <li><Link to={`/users/${this.props.user.id}`}><img className="search-profile-picture" src={photo} /></Link></li>
                    <div className='search-results-name'>
                        <li><Link to={`/users/${this.props.user.id}`}>{this.props.user.email.split("@")[0]}</Link></li> 
                        <li className='search-username'><Link to={`/users/${this.props.user.id}`}>{userName}</Link></li>     
                    </div>
            </div>
            </>
            );
    }
};


export default UserIndex