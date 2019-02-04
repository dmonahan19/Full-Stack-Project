import React from 'react';

const CreateBoard = (props) => {
    if (props.boards.length < 1 && props.currentUserId === props.user.id) {
    return(
    <>
    <div className="create-board-page">
        <div className="create-board-square">
            <div className="create-small-square">
                <button onClick={() => props.openModal('boardform')} className="red-plus"> + </button>
            </div>
            <h2 className="create-board-h1">Create a board</h2>
        </div>  
    </div> 
    </>
        )}
    else{
        return null
    }}

export default CreateBoard;