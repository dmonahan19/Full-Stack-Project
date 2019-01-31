import React from 'react';
import { Link } from 'react-router-dom';


const CreatePin = (props) => {

        return (
            <>
                <div className="create-board-page2">
                    <div className="create-board-square2">
                        <div className="create-small-square2">
                            <Link to='/pin-builder'> <button className="red-plus2"> + </button> </Link>
                        </div>
                        <h2 className="create-board-h12">Create a Pin</h2>
                    </div>
                </div>
            </>
        )
    }
    
  

export default CreatePin;