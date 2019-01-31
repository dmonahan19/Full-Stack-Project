import react from React 


const BoardList = (props) => {
    return (


        <div className='whole-image-save'>
            <h1>props.board.title</h1>
            <button className='button4' onClick={() => props.openModal('createpinform')} >
                <div className='whole-pin-button'>
                    <icon className='fas fa-thumbtack pin-index-icon'></icon>
                    <h1 className="pin-index-submit">Save</h1>
                </div>
            </button>
        </div>


    );
};

export default BoardList;
