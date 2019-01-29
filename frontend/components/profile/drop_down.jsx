import React from 'react'
import Profile from './profile'
import { Link } from 'react-router-dom';

class DropDown extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dropdown: false
        }
        this.showDropDown = this.showDropDown.bind(this)
        this.doubleClick = this.doubleClick.bind(this)
    }

    showDropDown(){
        const dropdown= this.state.dropdown;
        this.setState({dropdown: !dropdown});
      }

      doubleClick(){
        this.props.openModal('boardform')
        const dropdown= this.state.dropdown;
        this.setState({dropdown: !dropdown})
      }

      render(){
          return(
            <>
            <div>
                {this.state.dropdown ?
                <>
                <ul className='drop-down'>
                    <li  className='create-board'>
                    <button onClick={this.doubleClick} className=""> Create board </button>
                    </li>
                    <li className='create-pin'>
                        <Link to='/pin-builder'>Create Pin</Link>
                    </li>
                </ul>
              </>
                : null}
                <ul className="editlinks">
                    <li><button onClick={this.showDropDown} className="plus">+</button></li> 
                    <li><Link to="/settings"><img className="edit-img" src={window.pencil} /></Link></li>
                </ul>
            </div>
            </>
    
          )}

}

export default DropDown