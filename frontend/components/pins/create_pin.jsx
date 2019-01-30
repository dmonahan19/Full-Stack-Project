import React from 'react';

const CreatePin = (props) => {

        return (
            <>
                <div className="create-board-page">
                    <div className="create-board-square">
                        <div className="create-small-square">
                            <Link to='/pin-builder'> <button className="red-plus"> + </button> </Link>
                        </div>
                        <h2 className="create-board-h1">Create Pin</h2>
                    </div>
                </div>
            </>
        )
    }
  

export default CreatePin;