import React from 'react';

const CreateBoard = ({ openModal }) => {
    return(
    <>
    <div className="create-board-page">
        <div className="create-board-square">
            <div className="create-small-square">
                <button onClick={() => openModal('boardForm')} className="red-plus"> + </button>
            </div>
            <h2 className="create-board-h1">Create a board</h2>
        </div>  
    </div> 
    </>
        )}

export default CreateBoard;